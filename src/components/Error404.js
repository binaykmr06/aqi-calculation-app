import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import NavBar from './NavBar';

const { Content } = Layout;

export default class Error404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      
	render() {
		return <Layout>
			<NavBar activePage=""/>
				<Content className='page-content error404-page-content'>
                    <div className="error404-page center">
                        <h1 className='text-center'>Awwwwww!!!</h1>
                        <h2 className='text-center'>You Laded on wrong page !</h2>
                    <Link className='center' to={'/'}><Button type="primary">Go to Home Page</Button></Link>
                </div>
			</Content>
	</Layout>;
	}
}