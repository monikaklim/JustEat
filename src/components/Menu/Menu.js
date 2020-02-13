import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Categories from './Categories/Categories';
import './Menu.module.css';
import Cart from '../../containers/Order/Cart/Cart'
import {Route} from 'react-router-dom';


class Menu extends Component{


render(){

    return(
<div>     
<Navbar/>

<h1>Il Panino di Zio Frank </h1>

<div className="CategoriesContainer">
<Categories purchase = {this.purchaseContinuedHandler} />
</div>

<div className = "CartContainer">

<Route path = "/cart" component = {Cart} />
</div>



</div>   

    );
}
};

export default Menu;
