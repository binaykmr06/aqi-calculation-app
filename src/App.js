import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExtraPage from './components/ExtraPage';

export default class App extends React.Component {
  render() {
    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
        <Route path="/extra" element={<ExtraPage />} />
    </Routes>
  </BrowserRouter>;
  }
}