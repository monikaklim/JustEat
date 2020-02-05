import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Products from './Products/Products';
import Categories from './Categories/Categories';
import Sauces from './Sauces/Sauces';

class Menu extends Component{


render(){

    return(
<div>     
<Navbar/>

<h1>Menù</h1>
<Categories/>
<Sauces/>
<Products/>
</div>   

    );
}
};

export default Menu;