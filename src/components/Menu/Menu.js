import React from 'react';
import Navbar from '../Navbar/Navbar';
import Categories from './Categories/Categories';
import './Menu.module.css';
import Cart from '../../containers/Order/Cart/Cart'
import {Route} from 'react-router-dom';
import AnimatedLink from '../UI/AnimatedLink/AnimatedLink';

const menu = () =>{

return(
<div>     
<Navbar/>


<div className = "Banner">
<h1 className = "Title">Il Panino di Zio Frank </h1>
</div>

<br/>
<div className="CategoriesContainer">
<Categories  />
</div>

<div className = "CartContainer">
<h2>  <i className="material-icons">shopping_cart</i>  </h2>

<h4>Totale ordine  {Number(localStorage.getItem("price")).toFixed(2) } €</h4>
<p>Totale scontato del 25%: {(Number(localStorage.getItem("price")).toFixed(2) * 0.75).toFixed(2)} €</p>

{ localStorage.getItem("price") &&  localStorage.getItem("price") > 0  ? 

<div>

<AnimatedLink  path = "/cart"><button className = "LinkOrder">Ordina ora </button> </AnimatedLink>
</div>
  : 
<div>
 <button className = "LinkEmptyCart" disabled> Ordina ora </button> 
<br/>
<p><b>Il carrello è vuoto. </b></p>

</div>
}
<br/>
<br/>
<div className="OrdersContainer">
<Route path = "/cart" component = {Cart} />
</div>
</div>

</div>   

);

};

export default menu;
