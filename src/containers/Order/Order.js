import React, { Component } from 'react';
import './Option.module.css';

class Order extends Component{

    render(){
  
    return(
    <div className="Order">
 {this.props.order}
   
    </div>
   
    );
    }
};
export default Order;