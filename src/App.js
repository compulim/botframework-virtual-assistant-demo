import React, { Component } from 'react';
import './App.css';

import RightPane from './RightPane';
import WebChat from './WebChat';

class App extends Component {
  render() {
    return (
      <div className="app">
        <WebChat />
        <RightPane />
      </div>
    );
  }
}

export default App;
