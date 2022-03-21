import React from 'react';
import "./Error.scss";

const ErrorBlock = ({statusError}) => {
   return (
      <div className='error _container'>
         <div className="error__text">Ошибка получения данных! {statusError && `Статус ошибки: ${statusError}`}</div>
      </div>
   );
};

export default ErrorBlock;