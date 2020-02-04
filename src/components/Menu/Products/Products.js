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
  
axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {console.log(response)


}




); 
}


getProductsHandler = () =>{

axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {console.log(response)});

}




render(){

    return(
<div>     

<Product name = "nome" desc = "test" price = "0"/>
</div>   

    );
}
};
export default Products;