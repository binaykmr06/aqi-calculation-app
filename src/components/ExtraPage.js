import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../styles/App.less';

import logo from '../assects/images/logo.svg';

export default class ExtraPage extends React.Component {
  render() {
    return <div className="App">
      <header className="">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Extra Page.js</code> and save to reload.
        </p>
      </header>
    <Link to={'/'}><Button type="primary">Go to Home</Button></Link>
  </div>;
  }
}