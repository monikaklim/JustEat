import React, { Component } from 'react';
import Product from './Product/Product';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import Category from '../Category/Category';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class Products extends Component{

state ={

    products:[],
    categories:[],
    sauces:[]
}

    componentDidMount(){

        this.props.onFetchCategories();
        this.props.onFetchProducts();
    /*
    axios.get('https://www.justeat.it/menu/getproductsformenu?menuId=37633').then(response => {
    console.log(response.data);
        
    let cat = [];
    let sau = [];
    let prod = [];

    cat = response.data.Menu.Categories.map((c) =>
    {return  (
    <Category key ={c.Id} name = {c.Name} prods= {c.Items.map(i => i.Products.map(p => p.Id))  } /> );});
    
    sau = response.data.Menu.accessories.map(a=>
    {return a.Name }
    );

    prod = response.data.Menu.products.map((p)=>
        {return (
    <Product key = {p.Id} name = {p.Name} desc = {p.Desc}  price = {p.Price} syn = {p.Syn}  /> 
                );} );
    

    this.setState({products: prod, categories: cat, sauces: sau});
    console.log(this.state);
    
    }
    );
  */

    }



render(){

let categories = [];
let products = <Spinner/> 

if(!this.props.loading){
    products =  this.props.products.map(p => {return (
    <Product key = {p.Id} name = {p.Name} desc = {p.Desc}  price = {p.Price} syn = {p.Syn} /> 
                );} );


    categories = this.props.categories.map((c) =>
                {return  (
                <Category key ={c.Id} name = {c.Name} prods= {c.Items.map(i => i.Products.map(p => p.Id))  } /> );});

}

    return(
<div> 

{categories}  
{products}

</div>   

    );
}


};


const mapStateToProps = state =>{
    return{
        products: state.products,
        categories:state.categories,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return{
       onFetchProducts: () => dispatch(actions.fetchProducts()),
       onFetchCategories: () => dispatch(actions.fetchCategories())
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(Products);