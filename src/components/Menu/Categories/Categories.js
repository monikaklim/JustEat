import React, { Component } from 'react';
import Product from '../Products/Product/Product';
//import axios from 'axios';
import Category from './Category/Category';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';

class Categories extends Component{

    componentDidMount(){
        this.props.onFetchCategories();
    }


render(){

let show = [];
let categ = [];;
let prodsOfCat = [];
let idProdsOfCat = [];
let idProdsMenu = [];
const {products,categories} = this.props;
let productsArr = [];
let pr = [];

if(!this.props.loading){

 prodsOfCat = categories.map(c => c.Items.map(i => i.Products.map(
     p => p.Id
     )));

idProdsOfCat = prodsOfCat.map(p => p.toString().split(',').map((p) => p  ) );
idProdsMenu = products.map(p => p.Id).toString().split(',');

for(let key in idProdsMenu){
 for(let key2 in idProdsOfCat){

   if( idProdsOfCat[key2].find(p => p === idProdsMenu[key])){
   productsArr.push({prods : <Product key = {key}  name = {products[key].Name} desc = {products[key].Desc}  price = {products[key].Price} syn = {products[key].Syn}  categ = {key2}/> , cat: key2  } 
    );

}
    
 }   

 }


for(let key in categories){
console.log(productsArr.filter(p => p.cat === key) );
    categ.push(<Category key ={key}  name = {categories[key].Name}  products = {productsArr.filter(p => p.cat === key)   }  /> );
    
}


}





    return(
        <div> 
         { this.props.loading ? <Spinner/> :  categ }
        </div>   
    );


    };
}

    const mapStateToProps = state =>{
        return{
            categories:state.categories,
            products:state.products,
            loading: state.loading
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
        onFetchCategories: () => dispatch(actions.fetchProducts())
        };
    };



export default connect(mapStateToProps,mapDispatchToProps)(Categories);