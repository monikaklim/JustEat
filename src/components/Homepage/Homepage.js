import React, {Component} from 'react';
import './Homepage.module.css';
import Item from '../Item/Item';
import Navbar from '../Navbar/Navbar';


class Homepage extends Component {

    state= {
        items : [],
        text:''
    }


inputChangedHadler = (event) => {
    this.setState({text: event.target.value});
}



addItemHandler = () => {
let itArr = [];
itArr = [...this.state.items];
if(this.state.text){
itArr.push(this.state.text);
this.setState({items:itArr, text:''});}
}


render(){


console.log(this.state);
let array = [];
array = (
this.state.items.map((item,index) => {
    return <Item key = {index} text ={item} />
    }) );



return(
 
<div>
 <Navbar/>

    <h3>Add element</h3>
    <input className ="InputElement" type="text" value= {this.state.text}  onChange= {(event) => this.inputChangedHadler(event)}/>
    <br/>
    <button    onClick = {this.addItemHandler} className = "Button"  > Add </button>

<ul>
{array}
</ul>


</div>
);}

}
export default Homepage;