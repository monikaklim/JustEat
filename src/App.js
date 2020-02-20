import React, { Component } from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducerMenu from './store/reducers/reducerMenu';
import asyncComponent from './hoc/asyncComponent';
import './index.module.css';
import thunk from 'redux-thunk';
import reducerOrder from "./store/reducers/reducerOrder";
import Menu from './components/Menu/Menu';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

 const asyncInfo = asyncComponent(() => {
  return import('./components/RestaurantInfo/RestaurantInfo');
});


const rootReducer = combineReducers(
  {menu:reducerMenu,
    order:reducerOrder
  }
);

 const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


class App extends Component{

componentDidMount(){
  localStorage.clear();
}

render(){
return(
    <Provider store = {store}>
      <BrowserRouter>
        <div className="App">
<Switch>
      
        <Route path="/info" exact  component={asyncInfo} /> 
          <Route path="/"  component={Menu} /> 
          </Switch>
       
         
        </div>
      </BrowserRouter>
    </Provider>);
};

}
export default App;

