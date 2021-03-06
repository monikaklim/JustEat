import React, { Component } from 'react';
import Modal from '../../../../UI/Modal/Modal';
import './Product.module.css';
import * as actions from '../../../../../store/actions/index';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

class Product extends Component{

    state = {
        show:false,
        notes:''
    }

    showModal = () =>{
        this.setState({show : true});
        }

    hideModal = () =>{
            this.setState({show : false});
            this.props.onCancelOrder();
            }

    addedToCart = () =>{
        this.props.onAddProduct(this.props.obj, this.state.notes)
                this.setState({show : false, notes:''});
                }
        
  
    changeHandler = (event) =>{
                this.setState({notes: event.target.value});
              }

      
           
    
render(){

    let str = '';
    if(this.props.desc){
    str = this.props.desc.replace("<br />", "");
    str = str.replace("<br />", "");
    }
   
    let numSteps = 0;
    let stepMax = 0;
    let options =  this.props.opts;
    let op2 = options.filter(o => o.props.step === "2");
    let op3 = options.filter(o => o.props.step === "3");
    let op4 = options.filter(o => o.props.step === "4");

    if(this.props.opts.length > 0 ){
        numSteps = options.map(o =>  {return Number(o.props.step) } ) ;
        stepMax = (Math.max(...numSteps ) );
        if(this.props.sauces == null){
            stepMax = stepMax - 1;
        }
    }


    return(
     
<div>

    <div >
  <Link to = {this.props.opts.length > 0 ? "/modal" : "/cart"} className = "ProductLink" > <ul className="Product" onClick = {this.props.opts.length > 0 ?  this.showModal :  () => this.props.onAddProduct(this.props.obj, this.state.notes)  }> 
    <li> <b>{this.props.name}  <i style = {{color:'#f50028'}}>{this.props.syn} </i></b> </li>
    <li> {str}  </li>
    <li> <b>{this.props.price} € </b> </li>
</ul>

</Link>

</div>

{  this.state.show && this.props.opts.length > 0 ?




<Modal show = {  this.state.show}  modalClosed = {this.hideModal} clicked = { this.addedToCart } buttonText = {<i className="material-icons">add_shopping_cart</i>}  disabled = { (stepMax  === this.props.options.length)? false : true }> 
<div>
<h2>Opzioni</h2>
{op2.length > 0 ? 
<div>
<hr/>
<div> {op2}</div>
</div>
: null}   

{op3.length > 0 ? 
<div>
<hr/>
<div> {op3}</div>
</div>
: null} 

{op4.length > 0 ? 
<div>
<hr/>
<div> {op4}</div>

</div>
: null} 

{this.props.sauces ?
<div> <hr/>
<div> {this.props.sauces}</div>
</div> : null}


<hr/>
<p>Note</p>
<textarea  placeholder = "Intolleranze, allergie, ecc..." className = "Notes" onChange = {this.changeHandler}>
</textarea>

</div>
</Modal>  : null}

<Route path = "/modal" component = {Modal} />
</div>
  );

}

}


const mapStateToProps = state =>{
    return{
     options:state.order.options
    };
};


const mapDispatchToProps = dispatch => {
    return{
    onCancelOrder: () => dispatch(actions.cancelOrder()),
    onAddProduct: (product,notes) => dispatch(actions.addProduct(product,notes))
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(Product);
