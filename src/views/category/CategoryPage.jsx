import CategoryBlock from "../../components/category/category-block/CategoryBlock";


const CategoryPage = ({category,data,dataFilter, goods}) => {
   return (
    <main className="page">
       <CategoryBlock dataFilter={dataFilter} productType={category} data={data} goods={goods} />
    </main>
   )
}

export default CategoryPage;