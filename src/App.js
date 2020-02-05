import React from "react";
import Homepage from './containers/Homepage/Homepage';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';
import asyncComponent from './hoc/asyncComponent';
import './index.module.css';



const asyncMenu = asyncComponent(() => {
  return import('./components/Menu/Menu');
});

const store = createStore(reducer);


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
