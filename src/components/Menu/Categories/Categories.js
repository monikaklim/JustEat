import React, { Component } from 'react';
import Product from './Category/Product/Product';
import Category from './Category/Category';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';
import Option from '../Option/Option';


class Categories extends Component{

 
    componentDidMount(){
        this.props.onFetchData();
    }


    

render(){
let categ = [];
let options = [];
let prodsOfCat = [];
let idProdsOfCat = [];
let idProdsMenu = [];
let opt = [];
const {products,categories} = this.props;
let productsArr = [];
let sauces = this.props.sauces;
let opProd = [];

if(!this.props.loading){


console.log(this.props.options);

    prodsOfCat = categories.map(c => c.Items.map(i => i.Products.map(p => p.Id )));
    idProdsOfCat = prodsOfCat.map(p => p.toString().split(',').map((p) => p  ) );
    idProdsMenu = products.map(p => p.Id).toString().split(',');




options = categories.map ((cat)=>{ return {name: 
    cat.Name, 
    items: cat.Items.map((item)=>{return {product: 
                                          item.Products.map((product)=> { 
                                            return{id: product.Id, parts: (product.Parts)};
                                            })}
                                         })
   };
});
let o;
let idPr = "";
let idOp = "";
let prodWithOpt = null;
for(let key in options){

    for(let key2 in options[key].items){
        for(let key3 in options[key].items[key2].product){
     
            if(options[key].items[key2].product[key3] != null){

             for(let key4 in options[key].items[key2].product[key3]){
                 idPr = options[key].items[key2].product[key3].id;
               
                for(let key5 in options[key].items[key2].product[key3].parts){
        
                   prodWithOpt = products.find(p => p.Id === idPr);
                    for(let key6 in options[key].items[key2].product[key3].parts[key5]){
                      
                        idOp = options[key].items[key2].product[key3].parts[key5][key6].Id;   
                        
                        o = products.find(p => p.Id === idOp);
                      
                        opProd.push({...prodWithOpt, opt: o, step:key5});
                    }
                }
             }  
          }  
        }
    }
}



sauces = sauces.map(s => <Option key = {s.Id} name = {s.Name} step = "5" clickOpt = {() => this.props.onAddOption(5,s)} />);

for(let key in idProdsMenu){


 for(let key2 in idProdsOfCat){

    if( idProdsOfCat[key2].find(p => p === idProdsMenu[key])){

     opt = opProd.filter((p) => p.Id === products[key].Id);
     opt = opt.filter((op,index,self) => index === self.findIndex((o) => (op.opt.Name === o.opt.Name && op.opt.Id === o.opt.Id  ) ));
     
    productsArr.push({prods : <Product key = {products[key].Id} clickProd = {() => this.props.onAddProduct(products[key])}  name = {products[key].Name} desc = {products[key].Desc}  price = {products[key].Price} syn = {products[key].Syn}  sauces = { products[key].Syn === "Menù"  ? sauces : null} opts = {opt.map(o => <Option key = {o.opt.Id} name = {o.opt.Name} syn ={o.opt.Syn} price ={o.opt.Price} step = {o.step} clickOpt= {() => this.props.onAddOption(o.step, o.opt)} />)} /> , cat: key2  } 
        );


    }       
}
       
}   


for(let key in categories){
    categ.push(<Category key ={key}  name = {categories[key].Name}  products = {productsArr.filter(p => p.cat === key)   }  /> );
    
}

}



    return(
        <div> 
         { this.props.loading ? <Spinner/> :  categ }
        </div>   
    );


    };
}

    const mapStateToProps = state =>{
        return{
            categories:state.menu.categories,
            products:state.menu.products,
            loading: state.menu.loading,
            sauces: state.menu.sauces,
            options:state.order.options
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
        onFetchData: () => dispatch(actions.fetchData()),
        onAddOption: (step,option) => dispatch(actions.addOption(step,option)),
        onAddProduct: (product) => dispatch(actions.addProduct(product))
        };
    };



export default connect(mapStateToProps,mapDispatchToProps)(Categories);