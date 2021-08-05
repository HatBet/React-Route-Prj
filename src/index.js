import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>, document.getElementById('root')
);

reportWebVitals();