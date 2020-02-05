import React, { Component } from 'react';
import './Category.module.css';

class Category extends Component{

    render(){
  
    return(
    <div className="Category">
    <h3> <b>{this.props.name.toUpperCase()}   <button className ="showButton" >  <i style= {{fontSize:40}} class="material-icons">expand_more</i> </button> </b></h3>
       
    <div> 


</div>


</div>
   
    );
    }
};
export default Category;