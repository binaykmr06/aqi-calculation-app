import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import NavBar from './NavBar';

const { Content } = Layout;

export default class HomePage extends React.Component {
	render() {
		return <Layout>
			<NavBar activePage="home"/>
				<Content className='page-content'><div className="HomePage">
				<header className="">
					<p>
						Edit HomePage.js and save to reload.
					</p>
				</header>
				<Link to={'/extra'}><Button type="primary">Go to Extra</Button></Link>
			</div>
			</Content>
	</Layout>;
	}
}