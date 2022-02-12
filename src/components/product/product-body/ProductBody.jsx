import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductHeader from "../product-header/ProductHeader";

const ProductBody = ({ productType, data }) => {
  console.log(data[productType]);
   const {id} = useParams();
   console.log(id);
   const [product, setProduct] = useState([]);
   useEffect(()=>{
      setProduct(...data[productType].filter((prod)=>{return prod.id === +id}))
   },[])


  return (
    <section
      className="product product-page"
      data-test-id={`product-page-${productType}`}
    >
       <ProductHeader product={product} productType={productType}/>



    </section>
  );
};

export default ProductBody;
