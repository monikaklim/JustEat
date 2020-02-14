import React from 'react';
import './Backdrop.module.css';
import { Link } from 'react-router-dom';
const backdrop = (props) => (

props.show ? <Link to = "/cart"> <div className = "Backdrop" onClick = {props.clicked}> </div> </Link> : null



);
export default backdrop;