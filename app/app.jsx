import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import * as actions from 'actions';
import configureStore from 'configureStore';
import Main from 'Main';

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log('New state ', state);
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
</Provider>,
  document.getElementById('app')
);
