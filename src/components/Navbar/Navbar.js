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
    login = <li><a href = "/api/logout" className = "Link" onClick = {()=> localStorage.clear()  } >  Logout </a> </li>;
    }
    


return(
<ul className = "Navbar">


    {login}
    <li>  <NavLink className = "Link" to = "/info" exact  activeClassName ="ActiveLink">Info</NavLink></li>
    <li>  <NavLink className = "Link" to = "/cart" exact  activeClassName ="ActiveLink">Menù</NavLink></li>

    { user ?  <li className = "NameLoggedUser">   <img className = "ProfilePictureUser" src = {user.pic} alt = "profile picture "/> </li>    :null}

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
