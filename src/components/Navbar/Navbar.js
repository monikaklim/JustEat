import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.module.css';
import {connect} from 'react-redux';


const navbar = (props) =>{

const {user, loading} = props;


let login = <li  className = "Link"><p>...</p></li>;

if(!loading && !user){
login = <li><a href = "/auth/google" className = "Link" >  Accedi con Google </a></li>;
}

if(!loading && user){
    login = <li><a href = "/api/logout" className = "Link" onClick = {()=> localStorage.clear()  } >  Esci </a> </li>;
    }
    

let disp = 'block';
return(
<ul className = "Navbar">


    {login}
    
    <li>  <NavLink className = "Link" to = "/info" exact  activeClassName ="ActiveLink">Info Ristorante</NavLink></li>
    <li>  <NavLink className = "Link" to = "/cart" exact  activeClassName ="ActiveLink">Menù</NavLink></li>
    { user ?  <li title = {user.name}>  <NavLink  to = "/orders" exact  activeClassName ="ActiveImgLink"> <img className = "ProfilePictureUser" alt = "" src = {user.pic} style = {{display: {disp}}} onError = {() =>  disp = "none"}/> </NavLink> </li>    :null}

</ul>


);
};

const mapStateToProps = state =>{
    return{
   user: state.auth.user,
   loading: state.auth.loading
    };
};


export default connect(mapStateToProps)(navbar);
