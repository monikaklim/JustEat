import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.module.css';

const navbar = () =>(


<ul className = "Navbar">
    <li >  <Link className = "Link" to = "/menu" >Menù</Link></li>
    <li >  <Link className = "Link" to= "/" >Home</Link></li>
</ul>


);
export default navbar;