import React from 'react';

import './Product.module.css';

const product= (props) =>{

let str = '';
    if(props.desc){
    str = props.desc.replace("<br />", "");
    str = str.replace("<br />", "");
    }
 

    return(

<ul className="Product">

    <li> <b>{props.name}  <i style = {{color:'red'}}>{props.syn} </i></b> </li>
    <li> {str}  </li>
    <li> <b>{props.price} € </b> </li>

</ul>
 
    );

};
export default product;