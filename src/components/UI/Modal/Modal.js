import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.module.css';

const modal = (props) => {


const cssClasses = ["Modal", props.show  ? "ModalOpen"  :  "ModalClosed" ];


return(
    <div>
    <Backdrop show ={props.show}  clicked = {props.modalClosed}/>

    <div className={cssClasses.join(' ')}>
        <h1>A Modal</h1>
       

        {props.children}

        <button className="Button" onClick={props.modalClosed}>Cancel</button>
    </div>
    </div>
    );
};

export default modal;