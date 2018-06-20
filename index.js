import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './src/store/reducers/reducer';

import App from './src/containers/App/App';
import './src/styles/style.scss';


const store = createStore(
  reducer,
  applyMiddleware(thunk)
);


render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
