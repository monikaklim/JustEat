import React, {useEffect} from 'react';
import './OrderHistory.module.css';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import Order from '../../../components/UI/Item/Item';
import Spinner from '../../../components/UI/Spinner/Spinner';

const order = (props) => {

    useEffect( () => {
        props.onFetchOrders(); 
      }, [props.onFetchOrders]);

      let orders = <Spinner/>;


      if(!props.loading){
        orders = props.orders.map(o =>  
                <div>  
        
            <p> {o.date} </p>
        
                <br/>
                { o.order.map(or => <Order > x {or.qnt}  {or.name} {or.syn}   <br/> 
                { or.options !== [] ? or.options.map(op =>  <li> <br/> {op.Name}  {op.Syn}  <br/> </li> ) : null  }
                {or.notes ?    <p>  <br/> Note:  { or.notes} </p>  : null}  <br/> {or.productPrice} €    </Order>  ) }
        
                <br/>
            <p> Totale: {o.price}€ </p>
                <br/>
                <hr/>
                <br/>
            </div>
            ) ;

        }



    return(
 <div className = "OrderHistory">

    <div className = "UserData">
    <h2><img  alt = "" src = {props.user.pic} />    {props.user.name}    </h2>
    
    </div>

    <h2>Ordini </h2>

    {orders}


    </div>

 );
}
    



const mapStateToProps = state =>{
    return{
   user: state.auth.user,
   loading: state.order.loading,
   orders: state.order.orderHistory
    };
};

const mapDispatchToProps = dispatch => {
    return{
    onFetchOrders: () => dispatch(actions.fetchOrders())
  
    };
  };
  

export default connect(mapStateToProps,mapDispatchToProps)(order);