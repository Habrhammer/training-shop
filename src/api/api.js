import * as axios from "axios";

export const productsAPI = {
   getProducts(){
      return axios.get("https://training.cleverland.by/shop/products").then((response)=>{
         console.log(response);
         return response.data;
      })
   },
   getProduct(id){
      return axios.get(`https://training.cleverland.by/shop/product/${id}`).then((response)=>{
         return response.data;
      })
   }
}


// productsAPI.getProducts()