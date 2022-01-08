import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


    render() {
        return <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.props.activePage]}>
      <Menu.Item key="home"><Link to={'/'}>Home</Link></Menu.Item>
      <Menu.Item key="extra"><Link to={'/extra'}>Extra</Link></Menu.Item>
      <Menu.Item key="aq-index"><Link to={'/aq-index'}>AQI</Link></Menu.Item>
      </Menu>
    </Header>;
    }
}

