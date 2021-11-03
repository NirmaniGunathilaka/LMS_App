import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './component/Routes';
import reportWebVitals from './reportWebVitals';
import AdminNav from './component/AdminNav';
import { BrowserRouter } from "react-router-dom";
import NavRoutes from './component/NavRoutes';


ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
