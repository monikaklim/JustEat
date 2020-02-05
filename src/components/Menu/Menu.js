import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Products from './Products/Products';
import Categories from './Categories/Categories';
import Sauces from './Sauces/Sauces';
import Modal from '../UI/Modal/Modal';
import Options from '../Menu/Options/Options';

class Menu extends Component{

state = {
    purchasing:false
}



purchasingHandler = () =>{
this.setState({purchasing:true});
}

purchasingCancelledHandler = () =>{
    this.setState({purchasing:false});
    }
    


render(){

    return(
<div>     
<Navbar/>

<h1>Menù</h1>
<Options type = 'burger'/>
<Categories/>
<Sauces/>
<Products/>


<Modal show = {this.state.purchasing} clicked = {this.purchasingCancelledHandler}>  </Modal>
</div>   

    );
}
};

export default Menu;