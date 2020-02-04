import React, { Component } from 'react';
import Product from './Product/Product';
import axios from 'axios';

class Products extends Component{

state ={

    products:[],
    categories:[],
    sauces:[]
}

componentDidMount(){
  
axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {
    console.log(response.data);
    
let cat = [];
 let sau = [];
 let prod = [];

 cat = response.data.Menu.Categories.map(c =>
  {return c.Name }
  );
  
  sau = response.data.Menu.accessories.map(a=>
  {return a.Name }
  );

  prod = response.data.Menu.products.map((p,index)=>
    {return (
  <Product key = {index} name = {p.Name} desc = {p.Desc}  price = {p.Price} /> 
            );

    }
    );
  

  this.setState({products: prod, categories: cat, sauces: sau});
  console.log(this.state);
}

); 
}




render(){

    return(
<div>     
{this.state.products}

</div>   

    );
}
};
export default Products;