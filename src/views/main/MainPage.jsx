import Advantages from "../../components/advantages/Advantages";
import Blog from "../../components/blog/Blog";
import Clothes from "../../components/clothes/Clothes";
import MainBlock from "../../components/mainblock/MainBlock";
import News from "../../components/news/News";
import Subscribe from "../../components/subscribe/Subscribe";

const MainPage = ({ data }) => {
  let { advantages } = data;
  console.log(data);
  return (
    <main className="page">
      <MainBlock />
      <Advantages advantages={advantages} />
      <Clothes productType="women" data={data} />
      <Clothes productType="men" data={data} />
      <News/>
      <Subscribe/>
      <Blog data={data}/>
    </main>
  );
};

export default MainPage;
