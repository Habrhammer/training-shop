import Advantages from "../../components/advantages/Advantages";
import Blog from "../../components/blog/Blog";
import Clothes from "../../components/clothes/Clothes";
import MainBlock from "../../components/mainblock/MainBlock";
import News from "../../components/news/News";
import Subscribe from "../../components/subscribe/Subscribe";

const MainPage = ({ data,goods }) => {
  let { advantages } = data;
  console.log(data);
  return (
    <main className="page">
      <MainBlock />
      <Advantages advantages={advantages} />
      <Clothes productType="women" goods={goods} data={data} />
      <Clothes productType="men" goods={goods} data={data} />
      <News/>
      <Subscribe subscribeFormId="subscribeForm"/>
      <Blog data={data}/>
    </main>
  );
};

export default MainPage;
