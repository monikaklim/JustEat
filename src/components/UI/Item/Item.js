import React from 'react';
import './Item.module.css'

const item = (props) => (
   <li className = "Item" > {props.children}  </li>
);


export default item;