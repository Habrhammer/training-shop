import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import data from "./data/data.js"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
