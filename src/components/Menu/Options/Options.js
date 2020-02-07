import React, { Component } from 'react';
import Product from '../Products/Product/Product';
//import axios from 'axios';
import Option from './Option/Option';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';

class Options extends Component{

    componentDidMount(){
        this.props.onFetchOptions();
    }

render(){

let options =" ";


    
    return(
        <div> 
           <p> {options} </p> 
        </div>   
    );
    }   
}

    const mapStateToProps = state =>{
        return{
           loading: state.loading,
           options:state.options
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
        onFetchOptions: () => dispatch(actions.fetchOptions())
        };
    };


export default connect(mapStateToProps,mapDispatchToProps)(Options);