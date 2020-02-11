import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Checkout.module.css';
class Checkout extends Component{

    render(){
  
    return(
    <div className="Checkout">
<h1> Riepilogo ordine</h1>


 <b>{this.props.product.Name}   {this.props.product.Syn} </b> 
{this.props.options.map(o => <p>{o.Name} </p>)}  {this.props.options.map(o => <p>{o.Syn}</p>)}  
 <p> {this.props.price} €  </p>
 <p>Note:  {this.props.notes}  </p>


    </div>
   
    );
    }
};


const mapStateToProps = state =>{
    return{
     options:state.order.options,
     product:state.order.product,
     price:state.order.price,
     notes:state.order.notes
    };
};



export default connect(mapStateToProps)(Checkout);