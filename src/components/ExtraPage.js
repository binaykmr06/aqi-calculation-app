import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import '../styles/App.less';
import NavBar from './NavBar';

import logo from '../assects/images/logo.svg';

const { Content } = Layout;


export default class ExtraPage extends React.Component {
  render() {
    return <Layout>
    <NavBar activePage="extra"/>
      <Content className='page-content'><div className="App">
      <header className="">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Extra Page.js</code> and save to reload.
        </p>
      </header>
    <Link to={'/'}><Button type="primary">Go to Home</Button></Link>
  </div></Content></Layout>;
  }
}