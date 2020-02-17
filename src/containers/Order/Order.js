import React from 'react';
import './Order.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const order = (props) => (

 
   <ul className = "Order" > 
 <Link to =  "/cart" ><button className="RemoveOrderButton"  onClick= { () => props.onRemoveOrder(props.obj) }  > <i className="material-icons">close</i></button> </Link> 

 <b>  x {props.qnt} {props.name}   {props.syn} </b> 

{props.options ? 
<div>

{props.options.map(o => <p key = {o.Id}>{o.Name} {o.Syn} </p>)}

  </div>
  : null    }  
 <p> {Number(props.totPrice).toFixed(2)} €  </p>
 <p> Prezzo scontato del 25%: {(Number(props.totPrice).toFixed(2) * 0.75).toFixed(2)} €  </p>
 {props.notes ? <p>Note:  {props.notes}  </p> : null}
   
</ul>

)
    

const mapDispatchToProps = dispatch => {
  return{
  onRemoveOrder: (order) => dispatch(actions.removeOrder(order))
  };
};



export default connect(null,mapDispatchToProps)(order);