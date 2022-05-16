import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import '../src/indexMiniProject.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppQuickQuote from './AppQuickQuote';
import AppRealQuickQuote from './AppRealQuickQuote';
import AppMiniProject from './AppMiniProject';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppRealQuickQuote /> */}
    <AppMiniProject />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
