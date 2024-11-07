// In index.js or wherever you are rendering the app
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter> {/* Make sure this wraps your app */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

