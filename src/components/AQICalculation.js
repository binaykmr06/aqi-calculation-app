import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Card, Form, Input, Select } from 'antd';
import '../styles/App.less';
import NavBar from './NavBar';

const tabList = [
	{
		key: 'aqi_conc',
		tab: 'AQI to Concentration',
	},
	{
		key: 'conc_aqi',
		tab: 'Concentration to AQI',
	},
];

const onFinish = (values) => {
	console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

const onReset = () => {
	// form.resetFields();
	console.log('Reset:');
}

const formAqiToConc = <Form
	name="basic"
	// labelCol={{
	//   span: 5,
	// }}
	// wrapperCol={{
	//   span: 19,
	// }}
	layout="vertical"
	requiredMark={false}
	initialValues={{
		remember: true,
	}}
	onFinish={onFinish}
	onFinishFailed={onFinishFailed}
	autoComplete="off"
>
	<Form.Item name='pollutant_name' label="Select a Pollutant">
		<Select defaultValue="0">
			<Select.Option disabled value="0">{"Select a Parmeter"}</Select.Option>
			<Select.Option value="1">{"PM2.5 - Particulate <2.5 microns (24hr avg)"}</Select.Option>
			<Select.Option value="2">{"PM10 - Particulate <10 microns (24hr avg)"}</Select.Option>
			<Select.Option value="3">{"CO - Carbon Monoxide (8hr avg)"}</Select.Option>
			<Select.Option value="4">{"SO2 - Sulfur Dioxide (1hr avg)"}</Select.Option>
			<Select.Option value="5">{"SO2 - Sulfur Dioxide (24hr avg)"}</Select.Option>
			<Select.Option value="6">{"O3 - Ozone (8hr avg)"}</Select.Option>
			<Select.Option value="7">{"O3 - Ozone (1hr avg)"}</Select.Option>
			<Select.Option value="8">{"NO2 - Nitrogen Dioxide (1hr avg)"}</Select.Option>
		</Select>
	</Form.Item>
	<Form.Item
		label="Enter the AQI"
		name="aqi_value"
		rules={[
			{
				required: true,
				message: 'Please enter AQI value to get results!',
			},
		]}
	>
		<Input />
	</Form.Item>
	<Form.Item
		// wrapperCol={{
		//   offset: 8,
		//   span: 16,
		// }}
	>
		<Button className='margin-right-8' type="primary" htmlType="submit">
			Submit
		</Button>
		<Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
	</Form.Item>
</Form>;

const contentList = {
	aqi_conc: formAqiToConc,
	conc_aqi: <p>Concentration to AQI</p>,
};

const { Content } = Layout;

export default class AQICalculation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTabKey: 'aqi_conc'
		};
	}

	onTabChange = key => {
		this.setState({
			activeTabKey: key
		});
	};

	render() {
		return <Layout>
		<NavBar activePage="aq-index"/>
			<Content className='page-content'>
				<div className='padding-20'>
					<Card
						style={{ width: '100%' }}
						title="AQI Calculators"
						tabList={tabList}
						activeTabKey={this.state.activeTabKey}
						onTabChange={key => {
							this.onTabChange(key);
						}}
					>
						{contentList[this.state.activeTabKey]}
					</Card>
				</div>
				<div className="App">
					<header className="">
						{/* <img src={logo} className="App-logo" alt="logo" /> */}
							<p>
								Edit <code>src/Extra Page.js</code> and save to reload.
							</p>
						</header>
					<Link to={'/'}><Button type="primary">Go to Home</Button></Link>
				</div>
			</Content>
		</Layout>;
	}
};