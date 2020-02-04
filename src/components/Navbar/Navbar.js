import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.module.css';

const navbar = () =>(


<ul className = "Navbar">
    <li >  <NavLink className = "Link" to = "/menu" exact  activeClassName ="ActiveLink">Menù</NavLink></li>
    <li >  <NavLink className = "Link" to= "/"  exact  activeClassName ="ActiveLink">Home</NavLink></li>
</ul>


);
export default navbar;