import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default class HomePage extends React.Component {
  render() {
    return <div className="HomePage">
      <header className="">
        <p>
          Edit HomePage.js and save to reload.
        </p>
      </header>
    <Link to={'/extra'}><Button type="primary">Go to Extra</Button></Link>
  </div>;
  }
}