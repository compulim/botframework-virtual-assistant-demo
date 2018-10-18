import React, { Component } from 'react';
import updateIn from 'simple-update-in';

import './WebChat.css';

import {
  createDirectLine,
  createStore,
  createStyleSet,
  default as ReactWebChat
} from 'botframework-webchat';

import { createProvider } from 'react-redux';

const WebChatProvider = createProvider('webchat');

class App extends Component {
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
      store: createStore(),
      styleSet
    };
  }

  async componentDidMount() {
    const res = await fetch('https://webchat-mockbot.azurewebsites.net/directline/token', { method: 'POST' });
    const { token } = await res.json();

    this.setState(() => ({
      directLine: createDirectLine({
        token
      })
    }));
  }

  render() {
    const {
      state: { directLine, store, styleSet }
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
              />
            </WebChatProvider>
        }
      </div>
    );
  }
}

export default App;
