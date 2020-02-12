import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.module.css';

const navbar = () =>{


return(
<ul className = "Navbar">
   
   <li> <NavLink  className= "Cart" to= "/checkout" exact activeClassName = "ActiveLink"> <i className="material-icons">shopping_cart</i> </NavLink> </li>
    <li >  <NavLink className = "Link" to = "/" exact  activeClassName ="ActiveLink">Menù</NavLink></li>
  
</ul>


);
};
export default navbar;
//  <li >  <NavLink className = "Link" to= "/"  exact  activeClassName ="ActiveLink">Home</NavLink></li>