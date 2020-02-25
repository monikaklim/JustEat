import React from 'react';
import './Option.module.css';

 const option = (props) => {


let cssClass = "Option";
let curs = "pointer";

if(localStorage.getItem(props.step) )
   {  
    if(JSON.parse(localStorage.getItem(props.step)).Id === props.id)
    cssClass = "OptionSelected"
    curs = "default";
}

    return(

    <div className= {cssClass} onClick = { props.clickOpt} style = {{cursor:curs}} >
      
    <span><b>{props.name}  <i style = {{color:'#f50028'}}>{props.syn} </i>  </b></span>

   
    </div>
 
);
    }




    
export default option;