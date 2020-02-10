import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Categories from './Categories/Categories';



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

<h1>Il Panino di Zio Frank </h1>



<Categories/>


</div>   

    );
}
};

export default Menu;
