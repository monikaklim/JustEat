import React, { Component } from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import asyncComponent from './hoc/asyncComponent';
import './index.module.css';
import Menu from './components/Menu/Menu';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';




 const asyncInfo = asyncComponent(() => {
  return import('./components/RestaurantInfo/RestaurantInfo');
});




class App extends Component{

componentDidMount(){
  localStorage.clear();
  this.props.onFetchUser();
}

render(){
return(
 
      <BrowserRouter>
        <div className="App">
       <Navbar/>
        <Switch>
        <Route path="/info" exact  component={asyncInfo} /> 
          <Route path="/"  component={Menu} /> 
          </Switch>
         
        </div>
      </BrowserRouter>
    );
};

}


const mapDispatchToProps = dispatch => {
  return{
    onFetchUser: () => dispatch(actions.fetchUser())

  };
};


export default connect(null, mapDispatchToProps)(App);

