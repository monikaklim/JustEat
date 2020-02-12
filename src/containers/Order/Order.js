import React from 'react';
import './Order.module.css';

const order = (props) => (

 
   <ul className = "Order" > 

 <b>{props.name}   {props.syn} </b> 

{props.options ? 
<div>
{props.options.map(o => <p>{o.Name} </p>)}
 { props.options.map(o => <p>{o.Syn}</p>) }
  </div>
  : null    }  
 <p> {props.price} €  </p>
 
 {props.notes ? <p>Note:  {props.notes}  </p> : null}
   
</ul>

)
    
export default  order;
