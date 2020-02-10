import React, { Component } from 'react';
import Modal from '../../../UI/Modal/Modal';
import './Product.module.css';
import { render } from 'react-dom';

class Product extends Component{

    state = {

        show:false
    }
    showModal = () =>{
        this.setState({show : true});
        }

 
render(){

    let str = '';
    if(this.props.desc){
    str = this.props.desc.replace("<br />", "");
    str = str.replace("<br />", "");
    }

    return(
<div>
<ul className="Product" onClick = "showModal()" >

    <li> <b>{this.props.name}  <i style = {{color:'red'}}>{this.props.syn} </i></b> </li>
    <li> {str}  </li>
    <li> <b>{this.props.price} € </b> </li>
    <li>{this.props.opts}</li>
   
</ul>

</div>
 
    );

}


}
export default Product;