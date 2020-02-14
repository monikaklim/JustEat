import React, { Component } from 'react';
import './Checkout.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import {pulse} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import Cart from '../Cart/Cart';

const checkout = () =>{

        const AnimatedLink = styled.div`
        
        animation: 2s ${ keyframes`${pulse}`} infinite `;
        

    return(
<div>
    <Navbar />
    <div className="Checkout">
        <h1> Carrello</h1>

{   localStorage.getItem("price") > 0 ? 
<div>
<div className = "Orders">

<Cart/>

</div>
<div className = "Price">
<h4>Totale ordine  {Number(localStorage.getItem("price")).toFixed(2) } €</h4>
<p>Totale scontato del 25%: {(Number(localStorage.getItem("price")).toFixed(2) * 0.75).toFixed(2)} €</p>
</div>


<div className="LinkContainer">
<NavLink className = "LinkOrder" to = "/" > Aggiungi più prodotti </NavLink> 
<p> <b>oppure</b></p>
<AnimatedLink><NavLink className = "LinkOrder" to = "/" > Invia ordine </NavLink> </AnimatedLink>
</div>

</div>

  : 

<div>
<p><b>Il carrello è vuoto. </b></p>
<br/>


<AnimatedLink><NavLink className = "LinkEmptyCart" to = "/" > Ordina ora </NavLink></AnimatedLink>


</div>
}


</div>

</div>
   
    );
    }





export default checkout;