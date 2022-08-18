import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { ICategoryItem } from '../../@types';
import { RoutesPath } from '../../Routes';

export const Card: React.FC<ICategoryItem> = ({
  id,
  category,
  images,
  price,
  title,
  classNames,
}) => {
  return (
    <div className='card'>
      {images.length && (
        <img
          src={images[0]}
          className={cn('card-img-top img-fluid', classNames)}
          alt={title}
        />
      )}
      <div className='card-body'>
        <p className='card-text'>{title}</p>
        <p className='card-text'>{price} руб.</p>
        <Link
          to={`${RoutesPath.CATALOG}/${id}`}
          className='btn btn-outline-primary'>
          Заказать
        </Link>
      </div>
    </div>
  );
};
