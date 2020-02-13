import React from 'react';
import './Order.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const order = (props) => (

 
   <ul className = "Order" > 
 <Link to = "/cart"><button className="RemoveOrderButton"  onClick= { () => props.onRemoveOrder(props.idOrder,props.name,props.syn,props.price) }  > <i className="material-icons">close</i></button> </Link> 

 <b>{props.name}   {props.syn} </b> 
<p> x {props.qnt}</p>
{props.options ? 
<div>

{props.options.map(o => <p>{o.Name} </p>)}
 { props.options.map(o => <p>{o.Syn}</p>) }
  </div>
  : null    }  
 <p> {props.price.toFixed(2)} €  </p>
 
 {props.notes ? <p>Note:  {props.notes}  </p> : null}
   
</ul>

)
    

const mapDispatchToProps = dispatch => {
  return{
  onRemoveOrder: (orderId,orderName,orderSyn,price) => dispatch(actions.removeOrder(orderId,orderName,orderSyn,price))
  };
};



export default connect(null,mapDispatchToProps)(order);