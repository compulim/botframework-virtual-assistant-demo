import React, { Component } from 'react';
import { connect } from 'react-redux';

import './WebChat.css';

import adjustTemperature from './data/action/adjustTemperature';

import {
  createCognitiveServicesWebSpeechPonyfillFactory,
  createDirectLine,
  createStore,
  createStyleSet,
  default as ReactWebChat
} from 'botframework-webchat';

import { createProvider } from 'react-redux';
import fetchBingSpeechToken from './fetchBingSpeechToken';

const WebChatProvider = createProvider('webchat');

class WebChat extends Component {
  constructor(props) {
    super(props);

    let styleSet = createStyleSet({
      backgroundColor: 'rgba(255, 255, 255, .4)',
      bubbleBackground: '#444',
      bubbleBorder: 0,
      bubbleTextColor: 'White',
      bubbleFromUserBackground: '#0CF',
      bubbleFromUserBorder: 0,
      timestampColor: 'White'
    });

    styleSet = { ...styleSet,
      root: { ...styleSet.root,
        backdropFilter: 'blur(8px)'
      }
    };

    const f = createCognitiveServicesWebSpeechPonyfillFactory({ fetchToken: fetchBingSpeechToken });

    this.state = {
      directLine: null,
      store: createStore(
        {},
        () => next => action => {
          console.log(action.type);

          if (action.type === 'DIRECT_LINE/UPSERT_ACTIVITY') {
            // For demonstration purpose only: every time an activity come from DirectLineJS, we will change the driver side temperature to some random values
            this.props.adjustTemperature(~~(Math.random() * 10) + 65);
          }

          return next(action);
        }
      ),
      styleSet,
      webSpeechPonyfillFactory: function () {
        console.log('creating ponyfill factory');
        console.log(arguments);

        const result = f.apply(null, arguments);

        console.log(result);

        return result;
      }
      // webSpeechPonyfillFactory: createCognitiveServicesWebSpeechPonyfillFactory({ fetchToken: this.fetchBingSpeechToken })
    };

    console.log(this.state);
  }

  async componentDidMount() {
    const res = await fetch('https://hawo-webchat-virtual-assistant-demo.azurewebsites.net/directline/token', { method: 'POST' });
    const { token } = await res.json();

    this.setState(() => ({
      directLine: createDirectLine({
        token
      })
    }));
  }

  render() {
    const {
      state: { directLine, store, styleSet, webSpeechPonyfillFactory }
    } = this;

    return (
      <div className="web-chat">
        {
          !!directLine &&
            <WebChatProvider store={ store }>
              <ReactWebChat
                directLine={ directLine }
                storeKey="webchat"
                styleSet={ styleSet }
                webSpeechPonyfillFactory={ webSpeechPonyfillFactory }
              />
            </WebChatProvider>
        }
      </div>
    );
  }
}

export default connect(
  () => ({}),
  {
    adjustTemperature
  }
)(WebChat)
