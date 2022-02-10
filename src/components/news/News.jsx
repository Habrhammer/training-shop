import React from 'react';
import season from "./../../assets/images/news_section/new_season.jpg";
import sale from "./../../assets/images/news_section/sale.jpg";
import "./News.scss";

const News = () => {
   return (
      <section className="news">
         <div className="news__body _container">
            <div className="news__content">
               <div className="news__column">
                  <div className="news__item item-news _ibg">
                     <img src={season} alt="" className="item-news__image" />
                     <div className="item-news__content">
                        <a href="/#" className="item-news__link">
                           <div className="item-news__title">New Season</div>
                           <div className="item-news__text">lookbook collection</div>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="news__column">
                  <div className="news__item item-news _ibg">
                     <img src={sale} alt="" className="item-news__image" />
                     <div className="item-news__content">
                        <a href="/#" className="item-news__link">
                           <div className="item-news__title">Sale</div>
                           <div className="item-news__text">Get UP to <span>50% off</span></div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default News;