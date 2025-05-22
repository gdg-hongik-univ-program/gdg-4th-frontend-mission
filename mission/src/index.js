import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client 사용
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // 필요하다면 전역 CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);