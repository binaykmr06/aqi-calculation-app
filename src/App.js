import React from 'react';
import { Button } from 'antd';
import './App.less';

import logo from './logo.svg';

export default class App extends React.Component {
  render() {
    return <div className="App">
      <header className="">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    <Button type="primary">Button</Button>
  </div>;
  }
}