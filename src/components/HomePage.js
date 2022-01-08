import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Row, Col } from 'antd';
import NavBar from './NavBar';
import cartton_shape_1 from '../assects/images/cartton_shape_1.webp';
import cartton_shape_2 from '../assects/images/cartton_shape_2.webp';
import cartton_shape_3 from '../assects/images/cartton_shape_3.webp';
import cartton_shape_4 from '../assects/images/cartton_shape_4.webp';
import cartton_shape_5 from '../assects/images/cartton_shape_5.webp';
import cartton_shape_6 from '../assects/images/cartton_shape_6.webp';

const { Content } = Layout;

export default class HomePage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

	
	render() {
		return <Layout>
			<NavBar activePage="home"/>
				<Content className='page-content'>
					<div className="home-page">
						<div className='parameters-card'>
							<div className='parameters-card-with-margin'>
								<Col span={24} className='parameters-card-header'>
									<Row className='parameters-heading'>Air Quality Index Scale</Row>
									<Row className='parameters-text'>Know about the category of air quality index (AQI) your ambient air falls in and what it implies.</Row>
								</Col>
								<Row className='parameter-row'>
									<Col span={12} className='aqi-scale'>
										<div className='aqi-parameter-scale' style={{borderLeft: "16px solid #39A033"}}>
											<div className='aqi-parameter-image'><img data-src={cartton_shape_1} style={{width:"38px", height: "67px"}} src={cartton_shape_1} /></div>
											<div className='aqi-parameter-value-range'>
												<div className='aqi-parameter-value-range-text'>Good</div>
												<div className='aqi-parameter-value-range-text1'>0-50</div>
											</div>
											<div className='aqi-parameter-message'>The air is fresh and free from toxins. People are not exposed to any health risk.</div>
										</div>
									</Col>
									<Col span={12} className='aqi-scale padding-left-10'>
										<div className='aqi-parameter-scale' style={{borderLeft: "16px solid #D4CA2F"}}>
											<div className='aqi-parameter-image'><img data-src={cartton_shape_2} style={{width:"38px", height: "67px"}} src={cartton_shape_2} /></div>
											<div className='aqi-parameter-value-range'>
												<div className='aqi-parameter-value-range-text'>Moderate</div>
												<div className='aqi-parameter-value-range-text1'>51-100</div>
											</div>
											<div className='aqi-parameter-message'>Acceptable air quality for healthy adults but mild threat to sensitive individuals.</div>
										</div>
									</Col>
								</Row>
								<Row className='parameter-row'>
									<Col span={12} className='aqi-scale'>
										<div className='aqi-parameter-scale' style={{borderLeft: "16px solid #E75834"}}>
											<div className='aqi-parameter-image'><img data-src={cartton_shape_3} style={{width:"38px", height: "67px"}} src={cartton_shape_3} /></div>
											<div className='aqi-parameter-value-range'>
												<div className='aqi-parameter-value-range-text'>Poor</div>
												<div className='aqi-parameter-value-range-text1'>101-200</div>
											</div>
											<div className='aqi-parameter-message'>Inhaling such air can cause slight discomfort and difficulty in breathing.</div>
										</div>
									</Col>
									<Col span={12} className='aqi-scale padding-left-10'>
										<div className='aqi-parameter-scale' style={{borderLeft: "16px solid #EA519F"}}>
											<div className='aqi-parameter-image'><img data-src={cartton_shape_4} style={{width:"38px", height: "67px"}} src={cartton_shape_4} /></div>
											<div className='aqi-parameter-value-range'>
												<div className='aqi-parameter-value-range-text'>Unhealthy</div>
												<div className='aqi-parameter-value-range-text1'>201-300</div>
											</div>
											<div className='aqi-parameter-message'>This could be typically problematic for children, pregnant women and the elderly.</div>
										</div>
									</Col>
								</Row>
								<Row className='parameter-row'>
									<Col span={12} className='aqi-scale'>
										<div className='aqi-parameter-scale' style={{borderLeft: "16px solid #975AA0"}}>
											<div className='aqi-parameter-image'><img data-src={cartton_shape_5} style={{width:"38px", height: "67px"}} src={cartton_shape_5} /></div>
											<div className='aqi-parameter-value-range'>
												<div className='aqi-parameter-value-range-text'>Severe</div>
												<div className='aqi-parameter-value-range-text1'>301-400</div>
											</div>
											<div className='aqi-parameter-message'>Exposure to air can cause chronic morbidities or even organ impairment.</div>
										</div>
									</Col>
									<Col span={12} className='aqi-scale padding-left-10'>
										<div className='aqi-parameter-scale' style={{borderLeft: "16px solid #BF2133"}}>
											<div className='aqi-parameter-image'><img data-src={cartton_shape_6} style={{marginLeft: "-10px", marginTop: "10px", width: "auto", height: "50px"}} src={cartton_shape_6} /></div>
											<div className='aqi-parameter-value-range'>
												<div className='aqi-parameter-value-range-text'>Hazardous</div>
												<div className='aqi-parameter-value-range-text1'>401-500</div>
											</div>
											<div className='aqi-parameter-message'>Beware! Your life is in danger. Prolonged exposure can lead to premature death.</div>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
			</Content>
	</Layout>;
	}
}