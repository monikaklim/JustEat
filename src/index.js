import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reducerMenu from './store/reducers/reducerMenu';
import thunk from 'redux-thunk';
import reducerOrder from "./store/reducers/reducerOrder";
import reducerAuth from "./store/reducers/reducerAuth";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(
    {menu:reducerMenu,
      order:reducerOrder,
      auth:reducerAuth
    }
  );
  
   const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  


ReactDOM.render(   <Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
