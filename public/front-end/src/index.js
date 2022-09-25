import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router';
import reportWebVitals from './reportWebVitals';
import ThemContext from './ThemeContext/ThemContext'
// import { BrowserRouter } from 'react-router-dom';
// import roboto from '@fontsource/roboto';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
ReactDOM.render(<ThemContext><App /></ThemContext>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
