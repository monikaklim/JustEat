import React, { Component } from 'react';
import './Category.module.css';

class Category extends Component{

    render(){
  

let prods  = this.props.products;



    return(
        <div>
    <div className="Category">
    <h3> <b>{this.props.name.toUpperCase()}   <button className ="showButton" >  <i style= {{fontSize:40}} className="material-icons">expand_more</i> </button> </b></h3>
    </div > 

    <div className = "products"> 
    {prods.map(p => p.prods)}

</div>

</div> 
    );
    }
};
export default Category;