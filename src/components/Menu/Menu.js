import React, {useState} from 'react';
import {connect} from 'react-redux';
import Categories from './Categories/Categories';
import './Menu.module.css';
import Cart from '../../containers/Order/Cart/Cart'
import {Route} from 'react-router-dom';
import AnimatedLink from '../UI/AnimatedLink/AnimatedLink';
import * as actions from '../../store/actions/index';
import Modal from '../UI/Modal/Modal';

const menu = (props) =>{

  const [show, setShow] = useState(false);

const sendOrderHandler = () =>{
  props.onSendOrder();
   setShow(true);
}

const closeModalHandler = () =>{
  setShow(false);
}


const {user} = props;

return(
<div>     

<div className = "Header">
<h1 className = "Title">IL PANINO DI ZIO FRANK</h1>
</div>


<Modal show = {show} modalClosed = {closeModalHandler} buttonText = "Chiudi" clicked = {closeModalHandler}>
  <p>L'ordine è stato inviato con successo.</p>
</Modal>


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


{user ? <AnimatedLink  path =  "/cart"><button className = "LinkOrder" onClick= {sendOrderHandler}>Invia ordine </button> </AnimatedLink> : 

<a href = "/auth/google"  ><button className = "LinkOrder">  Accedi per ordinare</button> </a>

}

</div>
  : 
<div>


 {user ?  <button className = "LinkEmptyCart" disabled> Invia ordine </button>  : 

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
  onSendOrder: () => dispatch(actions.sendOrder())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(menu);
