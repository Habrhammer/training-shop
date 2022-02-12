import ProductBody from "../../components/product/product-body/ProductBody";

const ProductPage = ({productType, data}) => {
   return (
    <main className="page">
       <ProductBody data={data} productType={productType}/>
    </main>
   )
}

export default ProductPage;