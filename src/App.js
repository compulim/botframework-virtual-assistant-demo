import { Provider } from 'react-redux';
import React, { Component } from 'react';
import './App.css';

import createStore from './data/createStore';
import RightPane from './RightPane';
import WebChat from './WebChat';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: createStore()
    };
  }

  render() {
    const { state: { store } } = this;

    return (
      <Provider store={ store }>
        <div className="app">
          <WebChat />
          <RightPane />
        </div>
      </Provider>
    );
  }
}
