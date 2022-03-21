import React from 'react';
import "./Error.scss";

const Error = ({statusError}) => {
   return (
      <div className='error _container'>
         <div className="error__text">Ошибка получения данных! {statusError && `Статус ошибки: ${statusError}`}</div>
      </div>
   );
};

export default Error;