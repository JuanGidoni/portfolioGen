import React from 'react';
import ReactDOM from 'react-dom';
import './components/Templates/styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './components/Contexts/AppContext'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
