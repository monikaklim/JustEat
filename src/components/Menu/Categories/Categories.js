import React, { Component } from 'react';
import Product from '../Products/Product/Product';
//import axios from 'axios';
import Category from './Category/Category';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class Categories extends Component{

    componentDidMount(){
        this.props.onFetchCategories();
    }


render(){

let categories = [];

if(!this.props.loading){

    categories = this.props.categories.map((c) =>
                {return  (
                <Category key ={c.Id} name = {c.Name} prods= {c.Items.map(i => i.Products.map(p => p.Id)) } /> );});
}

    return(
        <div> 
            {categories}  
        </div>   
    );
    }

    };


    const mapStateToProps = state =>{
        return{
            categories:state.categories,
            loading: state.loading
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
        onFetchCategories: () => dispatch(actions.fetchCategories())
        };
    };



export default connect(mapStateToProps,mapDispatchToProps)(Categories);