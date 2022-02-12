import CategoryBlock from "../../components/category/category-block/CategoryBlock";


const CategoryPage = ({category,data,dataFilter}) => {
   return (
    <main className="page">
       <CategoryBlock dataFilter={dataFilter} productType={category} data={data} />
    </main>
   )
}

export default CategoryPage;