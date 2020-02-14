import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Categories from './Categories/Categories';
import './Menu.module.css';
import Cart from '../../containers/Order/Cart/Cart'
import {Route} from 'react-router-dom';


const menu = (props) =>{


return(
<div>     
<Navbar/>

<h1>Il Panino di Zio Frank </h1>

<div className="CategoriesContainer">
<Categories  />
</div>

<div className = "CartContainer">
<h2>   <i className="material-icons">shopping_cart</i>  </h2>

<h4>Totale ordine  {Number(localStorage.getItem("price")).toFixed(2) } €</h4>
<p>Totale scontato del 25%: {(Number(localStorage.getItem("price")).toFixed(2) * 0.75).toFixed(2)} €</p>

<Route path = "/cart" component = {Cart} />
</div>



</div>   

);

};

export default menu;
