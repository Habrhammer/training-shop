import "./Advantages.scss";

const Advantages = ({advantages}) => {
   
   return (
      <section className="advantages">

         <div className="_container">
            <div className="advantages__body">
            
               {advantages.map(({id,image,title,text})=>{
                  return (
                     <div className="advantages__column" key={id}>
                     <div className="advantages__item item-advantages">
                        <div className="item-davantages__icon"><img src={image} alt=""/></div>
                        <div className="item-advantages__content">
                           <div className="item-advantages__title">{title}</div>
                           <div className="item-advantages__text">{text}</div>
                        </div>
                     </div>
                  </div>
                  );
               })}
            </div>
         </div>
      </section>
   )
}

export default Advantages;