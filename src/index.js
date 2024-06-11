import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppTestBoard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
//react strict mode 주석
//https://velog.io/@citron03/React%EC%9D%98-StrictMode%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C