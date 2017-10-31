import React from 'react';
import {createStore,compose, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import csm from 'redux-saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import { watch } from './saga';

const sm = csm();

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(sm),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sm.run(watch);

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();

