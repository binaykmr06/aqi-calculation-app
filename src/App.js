import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AQICalculation from './components/AQICalculation';
import Error404 from './components/Error404';

export default class App extends React.Component {
  render() {
    return <BrowserRouter>
    <Routes>
        <Route exact={true} path="/" element={<HomePage />}/>
        <Route exact={true} path="/aq-index" element={<AQICalculation />} />
        <Route exact={true} path="/404" element={<Error404 />} />
    </Routes>
  </BrowserRouter>;
  }
}