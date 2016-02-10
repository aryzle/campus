import React from 'react';  
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();

// Routes
import routes from './routes';

const Routes = (
  <Router history={history}>
    { routes }
  </Router>
)

const app = document.getElementById('react');
render(Routes, app);
