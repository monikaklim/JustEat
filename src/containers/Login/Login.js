import React from 'react';
import './Login.module.css';
import Navbar from '../../components/Navbar/Navbar';
import { NavLink} from 'react-router-dom';


const login = () =>{
     
    return(
<div>
    <Navbar />
    <div className="Login">
        <h1> Accedi </h1>
  <div className = "LoginContainer">
        <form >
        <input className = "InputLogin" type ="text" placeholder="Username" />
        <input className = "InputLogin" type ="password" placeholder="Password"  autoComplete="on"/> 
        <NavLink to= "/" className = "LoginButton">Accedi</NavLink>
        <NavLink to= "/" className = "LoginButton"><i className="fa fa-google"></i>  Accedi con Google </NavLink>
        </form>
        <br/>
        <NavLink to = "/" className = "RegistrationLink">Registrati</NavLink>
        </div>
    </div>
</div>

); 
}



export default login;