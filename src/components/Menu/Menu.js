import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Products from './Products/Products';

class Menu extends Component{


render(){

    return(
<div>     
<Navbar/>
<h3>Menu</h3>
<Products/>
</div>   

    );
}
};
export default Menu;