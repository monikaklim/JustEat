import React from "react";
import Homepage from './containers/Homepage/Homepage';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducerMenu from './store/reducers/reducerMenu';
import asyncComponent from './hoc/asyncComponent';
import './index.module.css';
import thunk from 'redux-thunk';
import reducerOrder from "./store/reducers/reducerOrder";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const asyncMenu = asyncComponent(() => {
  return import('./components/Menu/Menu');
});
const asyncCheckout= asyncComponent(() => {
  return import('./containers/Order/Checkout/Checkout');
});

const rootReducer = combineReducers(
  {menu:reducerMenu,
    order:reducerOrder
  }
);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const App = () =>(

    <Provider store = {store}>
      <BrowserRouter>
        <div className="App">
 
          <Route path="/" exact component={Homepage}/>

          <Route path="/menu" exact component={asyncMenu} /> 

          <Route path="/checkout" exact component={asyncCheckout} /> 
        </div>
      </BrowserRouter>
    </Provider>
  );


export default App;
