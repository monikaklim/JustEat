import React, { Component } from 'react';


class Category extends Component{

state = {
products :[]

}


componentDidMount(){

    let pr = this.props.prods;
    this.setState({products:this.props.prods});









}

    render(){
  



    return(
    <div className="Category">
    <h3> <b>{this.props.name} </b> </h3>



<div> 




</div>






    </div>
   
    );
    }
};
export default Category;