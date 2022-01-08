import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Card, Form, Input, Select, Statistic, Row, Col, Typography } from 'antd';
import '../styles/App.less';
import NavBar from './NavBar';

const { Content } = Layout;
const { Title, Text } = Typography;


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

export default class AQICalculation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTabKey: 'aqi_conc',
			pageData: null
		};
	}

	onTabChange = key => {
		this.setState({
			activeTabKey: key,
			pageData: null
		});
	};

	onFinish = (values) => {
		console.log('Success:', values);
		this.setState({
			pageData: true
		});
	};
	
	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	
	onReset = () => {
		// form.resetFields();
		console.log('Reset:');
		this.setState({
			pageData: null
		});
	}

	render() {
		return <Layout>
		<NavBar activePage="aq-index"/>
			<Content className='page-content'>
				<div className='aqi-calc-page padding-20'>
					<Card
						style={{ width: '100%' }}
						title="AQI Calculators"
						tabList={tabList}
						activeTabKey={this.state.activeTabKey}
						onTabChange={key => {
							this.onTabChange(key);
						}}
					>
						{(() => {
							if(this.state.activeTabKey == 'aqi_conc') {
								return <div>
									<Title level={4}>AQI to Concentration Calculator</Title>
									<Title level={5}>DIRECTIONS: Select a pollutant, then enter the AQI value. Click on <Text code>Calculate</Text> to see the results.</Title>
									<Form
										name="aqi_to_conc"
										className='margin-top-45'
										layout="vertical"
										requiredMark={false}
										initialValues={{
											remember: true,
										}}
										onFinish={(values) => this.onFinish(values)}
										onFinishFailed={(errorInfo) => this.onFinishFailed(errorInfo)}
										autoComplete="off"
									>
										<Form.Item name='pollutant_name' label="Select a Pollutant" rules={[
												{
													required: true,
													message: 'Please select parmeter before submit!',
												},
											]}>
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
											<Input placeholder="eg: 10"/>
										</Form.Item>
										<Form.Item
											// wrapperCol={{
											//   offset: 8,
											//   span: 16,
											// }}
										>
											<Button className='margin-right-8' type="primary" htmlType="submit">
												Calculate
											</Button>
											<Button htmlType="button" onClick={() => this.onReset()}>
											Reset
											</Button>
										</Form.Item>
									</Form>
									{(() => {
										if(this.state.pageData) {
											return <Row gutter={16}>
												<Col span={12}>
													<Statistic title="Concentration" value={"35.4"} valueStyle={{fontSize: '20px'}} />
												</Col>
												<Col span={12}>
													<Statistic title="Units" value={"ug/m3"} valueStyle={{fontSize: '20px'}} />
												</Col>
												<Col span={12} className='margin-top-25'>
													<Statistic title="AQI Category" value={"Moderate"} valueStyle={{ color: '#ffffff', fontSize: '20px', backgroundColor: '#cf1322', paddingLeft: '10px', paddingBottom: '4px'}} />
												</Col>
												<Col span={12} className='margin-top-25'>
													<Statistic title="Sensitive Groups" value={"People with respiratory or heart disease, the elderly and children are the groups most at risk."} valueStyle={{fontSize: '20px'}} />
												</Col>
												<Col span={12} className='margin-top-25'>
													<Statistic title="Health Effects Statements" value={"Unusually sensitive people should consider reducing prolonged or heavy exertion."} valueStyle={{fontSize: '20px'}} />
												</Col>
												<Col span={12} className='margin-top-25'>
													<Statistic title="Cautionary Statements" value={"Unusually sensitive people should consider reducing prolonged or heavy exertion."} valueStyle={{fontSize: '20px'}} />
												</Col>
											</Row>;
										}
									})()}
								</div>;
							} else {
								return <div>
									<Title level={4}>Concentration to AQI Calculator</Title>
									<Title level={5}>DIRECTIONS: Select a pollutant, then enter the Concentration value. Click on <Text code>Calculate</Text> to see the results.</Title>
									<Form
										name="conc_to_aqi"
										className='margin-top-45'
										layout="vertical"
										requiredMark={false}
										initialValues={{
											remember: true,
										}}
										onFinish={(values) => this.onFinish(values)}
										onFinishFailed={(errorInfo) => this.onFinishFailed(errorInfo)}
										autoComplete="off"
									>
										<Form.Item name='pollutant_name' label="Select a Pollutant" rules={[
												{
													required: true,
													message: 'Please select parmeter before submit!',
												},
											]}>
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
											label="Units"
											name="units"
										>
											<Input placeholder="ug/m3" disabled/>
										</Form.Item>
										<Form.Item
											label="Enter the Concentration"
											name="conc_value"
											rules={[
												{
													required: true,
													message: 'Please enter Concentration value to get results!',
												},
											]}
										>
											<Input placeholder="eg: 10"/>
										</Form.Item>
										<Form.Item
											// wrapperCol={{
											//   offset: 8,
											//   span: 16,
											// }}
										>
											<Button className='margin-right-8' type="primary" htmlType="submit">
												Calculate
											</Button>
											<Button htmlType="button" onClick={() => this.onReset()}>
											Reset
											</Button>
										</Form.Item>
									</Form>
									{(() => {
										if(this.state.pageData) {
											return <Row gutter={16}>
												<Col span={12}>
													<Statistic title="AQI" value={"35.4"} valueStyle={{fontSize: '20px'}} />
												</Col>
												<Col span={12}>
													<Statistic title="AQI Category" value={"Moderate"} valueStyle={{ color: '#ffffff', fontSize: '20px', backgroundColor: '#cf1322', paddingLeft: '10px', paddingBottom: '4px'}} />
												</Col>
												<Col span={12} className='margin-top-25'>
													<Statistic title="Sensitive Groups" value={"People with respiratory or heart disease, the elderly and children are the groups most at risk."} valueStyle={{fontSize: '20px'}} />
												</Col>
												<Col span={12} className='margin-top-25'>
													<Statistic title="Health Effects Statements" value={"Unusually sensitive people should consider reducing prolonged or heavy exertion."} valueStyle={{fontSize: '20px'}} />
												</Col>
												<Col span={12} className='margin-top-25'>
													<Statistic title="Cautionary Statements" value={"Unusually sensitive people should consider reducing prolonged or heavy exertion."} valueStyle={{fontSize: '20px'}} />
												</Col>
											</Row>;
										}
									})()}
								</div>;
							}
						})()}
					</Card>
				</div>
			</Content>
		</Layout>;
	}
};