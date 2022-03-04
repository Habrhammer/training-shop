import ProductBody from "../../components/product/product-body/ProductBody";

const ProductPage = ({productType, data, goods}) => {
   return (
    <main className="page">
       <ProductBody data={data} goods={goods} productType={productType}/>
    </main>
   )
}

export default ProductPage;