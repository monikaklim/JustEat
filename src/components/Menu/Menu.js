import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Categories from './Categories/Categories';
import './Menu.module.css';
import Cart from '../../containers/Order/Cart/Cart'
import {Route, NavLink} from 'react-router-dom';
import AnimatedLink from '../UI/AnimatedLink/AnimatedLink';

const menu = (props) =>{


return(
<div>     
<Navbar/>

<h1>Il Panino di Zio Frank </h1>
<br/>
<div className="CategoriesContainer">
<Categories  />
</div>

<div className = "CartContainer">
<h2>  <i className="material-icons">shopping_cart</i>  </h2>

<h4>Totale ordine  {Number(localStorage.getItem("price")).toFixed(2) } €</h4>
<p>Totale scontato del 25%: {(Number(localStorage.getItem("price")).toFixed(2) * 0.75).toFixed(2)} €</p>

<Route path = "/cart" component = {Cart} />
{   localStorage.getItem("price") > 0  ? 

<div>
<NavLink className = "LinkOrder" to = "/" > Aggiungi più prodotti </NavLink> 
<p> <b>oppure</b></p>
<AnimatedLink className = "LinkOrder" path = "/">Invia ordine  </AnimatedLink>
</div>
  : 

<div>
<p><b>Il carrello è vuoto. </b></p>
<br/>

<AnimatedLink className = "LinkEmptyCart" path = "/">Ordina ora  </AnimatedLink>

</div>
}
</div>



</div>   

);

};

export default menu;
