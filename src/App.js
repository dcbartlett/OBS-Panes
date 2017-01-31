import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import {List} from './components';
import Logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="App-header">
          <Logo styleName="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div styleName="App-intro">
          List of components
          <List></List>
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
