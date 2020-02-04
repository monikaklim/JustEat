import React from 'react';

import './Product.module.css';

const product= (props) =>(

    <ul className="Product">
    <li>{props.name}  </li>
    <li> {props.desc}  </li>
    <li> {props.price}  </li>
    </ul>


);
export default product;