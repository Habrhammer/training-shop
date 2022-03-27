import React from 'react';
import "./ErrorBlock.scss";

const ErrorBlock = ({statusError}) => {
   return (
      <div className='error _container'>
         <div className="error__text">Ошибка получения данных! {`${statusError} `}</div>
      </div>
   );
};

export default ErrorBlock;