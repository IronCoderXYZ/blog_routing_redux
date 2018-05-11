// NPM Imports
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Local Imports
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
// Routes
import newPost from './components/newPost';
import PostsIndex from './components/postsIndex';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={newPost} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
