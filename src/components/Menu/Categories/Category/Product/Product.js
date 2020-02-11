import React, { Component } from 'react';
import Modal from '../../../../UI/Modal/Modal';
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
            localStorage.clear();
            }
        
  
    
render(){

    let str = '';
    if(this.props.desc){
    str = this.props.desc.replace("<br />", "");
    str = str.replace("<br />", "");
    }
   

    let options =  this.props.opts;
    let op2 = options.filter(o => o.props.step === "2");
    let op3 = options.filter(o => o.props.step === "3");
    let op4 = options.filter(o => o.props.step === "4");

   
    return(
      
<div>
    <div>
<ul className="Product" onClick = {this.props.opts.length > 0 ? this.showModal : this.props.clicked }>
    <li> <b>{this.props.name}  <i style = {{color:'red'}}>{this.props.syn} </i></b> </li>
    <li> {str}  </li>
    <li> <b>{this.props.price} € </b> </li>
</ul>

</div>

{  this.state.show && this.props.opts.length > 0 ?
<Modal show = {  this.state.show}  modalClosed = {this.hideModal} clicked = {this.props.clicked} > 
<div>
<h2>Opzioni</h2>
{op2.length > 0 ? 
<div>
<hr/>
<p> {op2}</p>
</div>
: null}   

{op3.length > 0 ? 
<div>
<hr/>
<p> {op3}</p>
</div>
: null} 

{op4.length > 0 ? 
<div>
<hr/>
<p> {op4}</p>

</div>
: null} 

{this.props.sauces ?
<div> <hr/>
<p> {this.props.sauces}</p>
</div> : null}

</div>
</Modal>  : null}

</div>
 
    );

}


}
export default Product;