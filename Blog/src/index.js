import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise'

// import reducers from './reducers';
import reducers from './reducers/index';
import PostsIndex from './components/postsIndex'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={ PostsIndex } />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
