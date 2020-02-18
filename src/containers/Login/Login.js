import React from 'react';
import './Login.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Cart from '../Order/Cart/Cart';
import { NavLink} from 'react-router-dom';
import AnimatedLink from '../../components/UI/AnimatedLink/AnimatedLink';

const login = () =>{

     
        
    return(
<div>
    <Navbar />
    <div className="Login">
        <h1> Login</h1>

        <form>
        <input className = "InputLogin" type ="text" placeholder="Username" />
        <input className = "InputLogin" type ="password" placeholder="Password" /> 
        <NavLink to= "/" className = "LoginButton">Accedi</NavLink>
        <NavLink to= "/" className = "LoginButton"><i class="fa fa-google"></i>  Accedi con Google </NavLink>
        </form>
        <br/>
        <NavLink to = "/" className = "RegistrationLink">Registrati</NavLink>

    </div>
</div>
    ); 
}



export default login;