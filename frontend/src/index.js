import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './router';
import ThemContext from './ThemeContext/ThemContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemContext><App /></ThemContext>
);

