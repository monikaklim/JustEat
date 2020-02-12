import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.module.css';
import { Link} from 'react-router-dom';

const modal = (props) => {


return(
   
    <div>
       
    <Backdrop show ={props.show}  clicked = {props.modalClosed}/>

    <div className= "Modal"  style = {{transfrom: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1':'0' }}>
       

        {props.children}

      <Link to = "/menu">
        <button className="Button"  onClick = {props.clicked} disabled = {props.disabled}>  <i class="material-icons">add_shopping_cart</i>  </button>
        </Link>
        </div>    
    </div> 
    
    );
};

export default modal;