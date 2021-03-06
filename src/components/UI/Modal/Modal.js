import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.module.css';
import { NavLink} from 'react-router-dom';

const modal = (props) => {


return(
   
    <div>
       
    <Backdrop show ={props.show}  clicked = {props.modalClosed}/>

    <div className= "Modal"  style = {{transfrom: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1':'0' , display: props.show ? 'block':'none'}}>
       
        {props.children}

     
       <NavLink to ="/cart"  ><button className="ConfirmButton"  onClick = {props.clicked } disabled = {props.disabled}> {props.buttonText}   </button>
       </NavLink>
        </div>    
    </div> 
    
    );
};

export default modal;