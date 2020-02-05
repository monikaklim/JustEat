import React, { Component } from 'react';
import './Option.module.css';

class Option extends Component{

    render(){
  
    return(
    <div className="Option">
    <b>{this.props.name}  <i style = {{color:'red'}}>{this.props.syn} </i></b>
       
    <div> 


</div>


</div>
   
    );
    }
};
export default Option;