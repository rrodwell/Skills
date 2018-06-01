import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../Components/App';
import Home from '../Components/Pages/home';
import Import from '../Components/Pages/import';

const routes = (
  <Router>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/import' component={Import} />
    </App>
  </Router>
);

export default routes;