import React, { Component } from 'react';
import './Sauce.module.css';

class Sauce extends Component{

    render(){
  
    return(
    <div className="Sauce">
    <h3> <b>{this.props.name} </b> </h3>
 </div>
   
    );
    }
};
export default Sauce;