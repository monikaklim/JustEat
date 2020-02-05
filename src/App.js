import React from "react";
import Homepage from './containers/Homepage/Homepage';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducers/reducerMenu';
import asyncComponent from './hoc/asyncComponent';
import './index.module.css';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const asyncMenu = asyncComponent(() => {
  return import('./components/Menu/Menu');
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) );


const App = () =>(

    <Provider store = {store}>
      <BrowserRouter>
        <div className="App">
 
          <Route path="/" exact component={Homepage}/>

          <Route path="/menu" exact component={asyncMenu} /> 
       
        </div>
      </BrowserRouter>
    </Provider>
  );


export default App;
