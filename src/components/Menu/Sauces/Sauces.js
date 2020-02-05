import React, { Component } from 'react';
//import axios from 'axios';
import Sauce from './Sauce/Sauce';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class Sauces extends Component{

    componentDidMount(){
        this.props.onFetchSauces();
    }


render(){

let sauces = [];

if(!this.props.loading){

    sauces= this.props.sauces.map(s=>
    {return <Sauce name = {s.Name}  /> }
        );
}

    return(
        <div> 
            {sauces}  
        </div>   
    );
    }

    };


    const mapStateToProps = state =>{
        return{
            sauces:state.sauces,
            loading: state.loading
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
        onFetchSauces: () => dispatch(actions.fetchSauces())
        };
    };



export default connect(mapStateToProps,mapDispatchToProps)(Sauces);