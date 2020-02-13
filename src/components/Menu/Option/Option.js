import React from 'react';
import './Option.module.css';


 const option = (props) => {

    return(

    <div className= "Option" onClick = {props.clickOpt}>
        <div>
    <b>{props.name}  <i style = {{color:'red'}}>{props.syn} </i>  </b>

    </div>
    </div>
   
    );
    }




    
export default option;