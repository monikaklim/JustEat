import React from 'react';
import './Option.module.css';
import { NavLink } from 'react-router-dom';


 const option = (props) => {

let opt = "";
  let cssClass = "Option";

if(localStorage.getItem(props.step) )
   {  
    console.log(opt);
    if(JSON.parse(localStorage.getItem(props.step)).Id === props.id)
    cssClass = "OptionSelected"
}






    return(



    <div className= {cssClass} onClick = { props.clickOpt}   >
        <div>
    <b>{props.name}  <i style = {{color:'red'}}>{props.syn} </i>  </b>

    </div>
    </div>
 
);
    }




    
export default option;