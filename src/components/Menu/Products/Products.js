import React, { Component } from 'react';
import Product from './Product/Product';

class Products extends Component{

state ={

    products:[]
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