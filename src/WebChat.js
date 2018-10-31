import React, { Component } from 'react';
import { connect } from 'react-redux';

import './WebChat.css';
import adaptiveCardHostConfig from './AdaptiveCardHostConfig';

import adjustTemperature from './data/action/adjustTemperature';
import setDestination from './data/action/setDestination';

import {
  createBrowserWebSpeechPonyfillFactory,
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

    this.state = {
      directLine: null,
      store: createStore(
        {},
        () => next => action => {
          if (action.type === 'DIRECT_LINE/UPSERT_ACTIVITY') {
            const { activity } = action.payload;

            if (
              activity.type === 'event'
              && activity.name === 'ActiveRoute.Directions'
            ) {
              try {
                this.props.setDestination({
                  estimatedTimeOfArrival: new Date(Date.now() + 15 * 60000),
                  fullAddress: activity.value.Destination.address.formattedAddress
                });
              } catch (err) {
                console.error(err);
              }
            }

            if (
              activity.type === 'event'
              && activity.name === 'ChangeTemperature'
            ) {
              this.props.adjustTemperature(activity.value);
            }

            // For demonstration purpose only: every time an activity come from DirectLineJS, we will change the driver side temperature to some random values
            // this.props.adjustTemperature(~~(Math.random() * 10) + 65);
          }

          return next(action);
        }
      ),
      styleSet,
      webSpeechPonyfillFactory: createBrowserWebSpeechPonyfillFactory()
    };
  }

  async componentDidMount() {
    const res = await fetch('https://hawo-webchat-virtual-assistant-demo.azurewebsites.net/directline/token', { method: 'POST' });
    const { token, userID } = await res.json();

    var directLine = createDirectLine({token});

    this.setState(() => ({
      directLine: directLine,
      userID
    }));

      directLine.postActivity({
        from: { id: userID, name: "User", role: "user"},
        name: 'startConversation',
        type: 'event',
        value: ''
    })
    .subscribe(function (id) {
        console.log('trigger "startConversation" sent');
    });
  }

  render() {
    const {
      props: { locale },
      state: { directLine, store, styleSet, userID, webSpeechPonyfillFactory }
    } = this;

    return (
      <div className="web-chat">
        {
          !!directLine &&
            <WebChatProvider store={ store }>
              <ReactWebChat
                adaptiveCardHostConfig={ adaptiveCardHostConfig }
                directLine={ directLine }
                locale={ locale }
                storeKey="webchat"
                styleSet={ styleSet }
                userID={ userID }
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
    adjustTemperature,
    setDestination
  }
)(WebChat)
