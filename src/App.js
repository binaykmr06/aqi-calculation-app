import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExtraPage from './components/ExtraPage';
import Error404 from './components/Error404';

export default class App extends React.Component {
  render() {
    return <BrowserRouter>
    <Routes>
        <Route exact={true} path="/" element={<HomePage />}/>
        <Route exact={true} path="/extra" element={<ExtraPage />} />
        <Route exact={true} path="/404" element={<Error404 />} />
    </Routes>
  </BrowserRouter>;
  }
}