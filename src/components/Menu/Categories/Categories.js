import React, { Component } from 'react';
import Product from '../Products/Product/Product';
import Category from './Category/Category';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';
import Option from '../Options/Option/Option';


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

let opProd = [];

if(!this.props.loading){


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
                      
                        opProd.push({...prodWithOpt, opt: o});
                    }
                }
             }  
          }  
        }
    }
}




for(let key in idProdsMenu){


 for(let key2 in idProdsOfCat){

    if( idProdsOfCat[key2].find(p => p === idProdsMenu[key])){


        opt = opProd.filter((p) => p.Id === products[key].Id);
       opt = opt.filter((op,index,self) => index === self.findIndex((o) => (op.opt.Name === o.opt.Name && op.opt.Id === o.opt.Id  ) ));
       
    productsArr.push({prods : <Product key = {products[key].Id}  name = {products[key].Name} desc = {products[key].Desc}  price = {products[key].Price} syn = {products[key].Syn}  opts = {opt.map(o => <Option key = {o.opt.Id} name = {o.opt.Name} syn ={o.opt.Syn} price ={o.opt.Price} />)} /> , cat: key2  } 
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
            categories:state.categories,
            products:state.products,
            loading: state.loading,
            options:state.options
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
        onFetchData: () => dispatch(actions.fetchData())
        };
    };



export default connect(mapStateToProps,mapDispatchToProps)(Categories);