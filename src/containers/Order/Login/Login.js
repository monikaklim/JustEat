import React from 'react';
import './Login.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Cart from '../Cart/Cart';
import { NavLink} from 'react-router-dom';
import AnimatedLink from '../../../components/UI/AnimatedLink/AnimatedLink';

const login = () =>{

     
        
    return(
<div>
    <Navbar />
    <div className="Login">
        <h1> Login</h1>


<h4>Totale ordine  {Number(localStorage.getItem("price")).toFixed(2) } €</h4>
<p>Totale scontato del 25%: {(Number(localStorage.getItem("price")).toFixed(2) * 0.75).toFixed(2)} €</p>

<Cart/>


{   localStorage.getItem("price") > 0 ? 

<div className="LinkContainer">
<NavLink className = "LinkOrder" to = "/cart" > Aggiungi più prodotti </NavLink> 
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
}



export default login;