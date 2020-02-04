import React from 'react';
import './Item.module.css'

const item = (props) => (
   <li className = "Item" > {props.text}  </li>
);


export default item;