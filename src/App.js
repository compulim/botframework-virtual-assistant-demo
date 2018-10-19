import { Provider } from 'react-redux';
import React, { Component } from 'react';
import './App.css';

import createStore from './data/createStore';
import RightPane from './RightPane';
import WebChat from './WebChat';

export default class extends Component {
  constructor(props) {
    super(props);

    const searchParams = new URLSearchParams(window.location.search);

    this.state = {
      locale: searchParams.get('locale') || window.navigator.language,
      store: createStore()
    };
  }

  render() {
    const { state: { store } } = this;

    return (
      <Provider store={ store }>
        <div className="app">
          <WebChat locale={ this.state.locale } />
          <RightPane />
        </div>
      </Provider>
    );
  }
}
