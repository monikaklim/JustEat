import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.module.css';
import {connect} from 'react-redux';


const navbar = (props) =>{

const {user} = props;
return(
<ul className = "Navbar">

{ user ?    <li>  <a href = "/api/logout" className = "Link" >  Logout </a></li> :

<li>     
     <a href = "/auth/google" className = "Link" >  Accedi con Google </a></li>
 }

    <li>  <NavLink className = "Link" to = "/info" exact  activeClassName ="ActiveLink">Info</NavLink></li>
    <li>  <NavLink className = "Link" to = "/" exact  activeClassName ="ActiveLink">Menù</NavLink></li>

    { user ?  <li className = "NameLoggedUser">   <img className = "ProfilePictureUser" src = {user.pic} /> </li>    :null}

</ul>


);
};

const mapStateToProps = state =>{
    return{
   user: state.auth.user
    };
};


export default connect(mapStateToProps)(navbar);
