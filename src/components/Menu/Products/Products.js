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
let products = <Spinner/>;

if(!this.props.loading){
    products =  this.props.products.map(p => {return (
    <Product key = {p.Id} name = {p.Name} desc = {p.Desc}  price = {p.Price} syn = {p.Syn} /> 
                );} );
}

    return(
<div> 

{products}
</div>   
);
}

};


const mapStateToProps = state =>{
    return{
        products: state.products,
        loading: state.loading

    };
};

const mapDispatchToProps = dispatch => {
    return{
       onFetchProducts: () => dispatch(actions.fetchProducts())
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(Products);