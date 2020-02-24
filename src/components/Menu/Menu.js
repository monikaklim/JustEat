import React from 'react';
import {connect} from 'react-redux';
import Categories from './Categories/Categories';
import './Menu.module.css';
import Cart from '../../containers/Order/Cart/Cart'
import {Route} from 'react-router-dom';
import AnimatedLink from '../UI/AnimatedLink/AnimatedLink';
import * as actions from '../../store/actions/index';

const menu = (props) =>{

const {user} = props;
props.onFetchOrders()
return(
<div>     

<div className = "Header">
<h1 className = "Title">Il Panino di Zio Frank </h1>
</div>

<br/>
<div className="CategoriesContainer">
<Categories  />
</div>

<div className = "CartContainer">
<h2>  <i className="material-icons">shopping_cart</i>  </h2>

<h4>Totale ordine  {Number(localStorage.getItem("price")).toFixed(2) } €</h4>
<p>Totale scontato del 25%: {(Number(localStorage.getItem("price")).toFixed(2) * 0.75).toFixed(2)} €</p>

{ localStorage.getItem("price") &&  localStorage.getItem("price") > 0  ? 

<div>


{user ? <AnimatedLink  path =  "/cart"><button className = "LinkOrder" onClick= {props.onSendOrder}>Ordina ora </button> </AnimatedLink> : 

<a href = "/auth/google"  ><button className = "LinkOrder">  Accedi per ordinare</button> </a>

}

</div>
  : 
<div>


 {user ?  <button className = "LinkEmptyCart" disabled> Ordina ora </button>  : 

<button className = "LinkEmptyCart" disabled> Accedi per ordinare </button> 

}


<br/>
<p><b>Il carrello è vuoto. </b></p>

</div>
}
<br/>
<br/>
<div className="OrdersContainer">
<Route path = "/cart" component = {Cart} />
</div>
</div>

</div>   

);

};


const mapStateToProps = state =>{
  return{
 user: state.auth.user,
 loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return{
  onSendOrder: () => dispatch(actions.sendOrder()),
  onFetchOrders: () => dispatch(actions.fetchOrders())

  };
};



export default connect(mapStateToProps, mapDispatchToProps)(menu);
