import React, { Component } from 'react';
import Modal from '../../../UI/Modal/Modal';
import './Product.module.css';

class Product extends Component{

    state = {

        show:false
    }



    showModal = () =>{
        this.setState({show : true});
        }


        hideModal = () =>{
            this.setState({show : false});
            }
    
 
render(){

    let str = '';
    if(this.props.desc){
    str = this.props.desc.replace("<br />", "");
    str = str.replace("<br />", "");
    }

    return(
<div>
<ul className="Product" onClick = {this.showModal} >

    <li> <b>{this.props.name}  <i style = {{color:'red'}}>{this.props.syn} </i></b> </li>
    <li> {str}  </li>
    <li> <b>{this.props.price} € </b> </li>

   
</ul>
<Modal show = {this.state.show}  modalClosed = {this.hideModal}  > {this.props.opts }  </Modal>
</div>
 
    );

}


}
export default Product;