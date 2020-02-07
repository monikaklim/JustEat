import React, { Component } from 'react';
import Product from './Product/Product';
//import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import Category from '../Categories/Category/Category';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class Products extends Component{


    componentDidMount(){
        this.props.onFetchProducts();
    }



render(){
let prods = <Spinner/>;
let cats =  [];
let prodsOfCat = [];
let idProdsOfCat = [];
let idProdsMenu = [];
const {products,sauces,categories} = this.props;

if(!this.props.loading){
    
    prods =  products.map(p => {return (
    <Product key = {p.Id} id = {p.Id} name = {p.Name} desc = {p.Desc}  price = {p.Price} syn = {p.Syn}  /> )});
  
    cats =  categories.map(c => {return (
        <Category key ={c.Id} name = {c.Name}  /> 
         );} ); 
 

 prodsOfCat = categories.map(c => c.Items.map(i => i.Products.map(
     p => p.Id
     )));

idProdsOfCat = prodsOfCat.toString().split(',');
idProdsMenu = products.map(p => p.Id).toString().split(',');
//console.log(idProdsMenu);


}

    return(
<div> 

{}
</div>   
);


};

}

const mapStateToProps = state =>{
    return{
        products: state.products,
        loading: state.loading,
       categories:state.categories
    };
};

const mapDispatchToProps = dispatch => {
    return{
       onFetchProducts: () => dispatch(actions.fetchProducts())
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(Products);