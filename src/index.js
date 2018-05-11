// NPM Imports
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
// Local Imports
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
// Routes
import PostsIndex from './components/postsIndex';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
