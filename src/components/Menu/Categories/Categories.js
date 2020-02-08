import React, { Component } from 'react';
import Product from '../Products/Product/Product';
import Category from './Category/Category';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';
import Option from '../Options/Option/Option';


class Categories extends Component{

    componentDidMount(){
        this.props.onFetchCategories();
        this.props.onFetchOptions();
    }


render(){
let prod = [];
let categ = [];
let options = [];
let prodsOfCat = [];
let idProdsOfCat = [];
let idProdsMenu = [];
const opt = this.props.options;
const {products,categories} = this.props;
let productsArr = [];

let opProd = [];

if(!this.props.loading){


prod = categories.map(c => c.Items.map(i => i.Products));

    prodsOfCat = categories.map(c => c.Items.map(i => i.Products.map(p => p.Id )));
    idProdsOfCat = prodsOfCat.map(p => p.toString().split(',').map((p) => p  ) );
    idProdsMenu = products.map(p => p.Id).toString().split(',');




//options = categories.map(c => c.Items.map(i => { return {idP : i.Id},  i.Products.map((p) => p.Parts ) }   ));


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

   // console.log("numero categoria "+ key );
    for(let key2 in options[key].items){
//console.log("num prod "+ key2);
        //console.log(options[key][key2]);
        for(let key3 in options[key].items[key2].product){
     
         //  console.log(options[key].items[key2].product);

            if(options[key].items[key2].product[key3] != null){

             for(let key4 in options[key].items[key2].product[key3]){
               //  console.log(options[key].items[key2].product[key3].id);
                 idPr = options[key].items[key2].product[key3].id;
               
                for(let key5 in options[key].items[key2].product[key3].parts){
                   //console.log(options[key].items[key2].product[key3].parts[key5]);
        
                   prodWithOpt = products.find(p => p.Id === idPr);
                    for(let key6 in options[key].items[key2].product[key3].parts[key5]){
                     // console.log(options[key].items[key2].product[key3].parts[key5][key6].Id);
                      
                        idOp = options[key].items[key2].product[key3].parts[key5][key6].Id;   
                        o = products.find(p => p.Id === idOp);
                        opProd.push({...prodWithOpt, opt: o});
                    }
                   //cercare opzione by id

                }
               
             }
             
             
          } 
            
        }

    }
  
}

console.log(opProd);




for(let key in idProdsMenu){


 for(let key2 in idProdsOfCat){

    if( idProdsOfCat[key2].find(p => p === idProdsMenu[key])){
    productsArr.push({prods : <Product key = {products[key].Id}  name = {products[key].Name} desc = {products[key].Desc}  price = {products[key].Price} syn = {products[key].Syn}   /> , cat: key2  } 
        );

    }
        
}


        
}   


for(let key in categories){
    categ.push(<Category key ={key}  name = {categories[key].Name}  products = {productsArr.filter(p => p.cat === key)   }  /> );
    
}

}


console.log(productsArr);

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
        onFetchCategories: () => dispatch(actions.fetchProducts()),
        onFetchOptions: () => dispatch(actions.fetchOptions())
        };
    };



export default connect(mapStateToProps,mapDispatchToProps)(Categories);