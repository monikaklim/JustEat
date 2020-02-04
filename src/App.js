import React from "react";
import Homepage from './components/Homepage/Homepage';
import {Route, BrowserRouter} from 'react-router-dom';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route path="/" exact component={Homepage} />
    <Route path="/menu" exact component={Menu} /> 
    </div>
  
    </BrowserRouter>
  );
}


export default App;
