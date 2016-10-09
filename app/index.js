import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import Raven from 'raven-js';

const sentryUrl = '';

window.onerror = function () {
  Raven.showReportDialog();
};

Raven.config(sentryUrl, {
  release: '0.1',
  tags: {
    branch: 'master'
  }
}).install();

ReactDOM.render(
  routes,
  document.getElementById('app')
);
