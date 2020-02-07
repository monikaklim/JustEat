import React, { Component } from 'react';
import './Category.module.css';

class Category extends Component{

    state ={
        visible:false
    }

    
toggleProductsHandler = ()=>{
    this.setState({visible: !this.state.visible})
}

render(){
  
  
let prods  = this.props.products;


    return(
<div>

    <div className="Category">
    <h3> <b>{this.props.name.toUpperCase()}   <button className ="showButton" onClick = {this.toggleProductsHandler} >  <i style= {{fontSize:40}} className="material-icons">expand_more</i> </button> </b></h3>
    </div > 

{ this.state.visible ?
    <div className = "products"  > 
        {prods.map(p => p.prods)}
    </div>
    :
    null
}


</div> 
    );
    }
};
export default Category;