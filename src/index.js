import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/variables.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
