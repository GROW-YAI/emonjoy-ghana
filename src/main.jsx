
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoafoWidgetInitializer />
    <App />
  </React.StrictMode>
);
