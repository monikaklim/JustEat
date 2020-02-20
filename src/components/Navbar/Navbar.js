import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.module.css';

const navbar = () =>{


return(
<ul className = "Navbar">
   
    <li>  <NavLink to= "/" className = "Link">  Accedi con Google </NavLink></li>
    <li>  <NavLink className = "Link" to = "/info" exact  activeClassName ="ActiveLink">Info</NavLink></li>
    <li>  <NavLink className = "Link" to = "/" exact  activeClassName ="ActiveLink">Menù</NavLink></li>
</ul>


);
};
export default navbar;
