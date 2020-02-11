import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Categories from './Categories/Categories';
import {Redirect} from 'react-router-dom';


class Menu extends Component{


render(){

    return(
<div>     
<Navbar/>

<h1>Il Panino di Zio Frank </h1>


<Categories purchase = {this.purchaseContinuedHandler} />


</div>   

    );
}
};

export default Menu;
