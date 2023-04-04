import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import App from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
