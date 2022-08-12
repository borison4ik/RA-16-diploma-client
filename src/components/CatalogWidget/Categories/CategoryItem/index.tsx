import React from 'react';
import { ICategory } from '../../../../@types';

export const CategoryItem: React.FC<ICategory> = ({ id, title }) => {
  return (
    <li className='nav-item'>
      <a className='nav-link' href='#'>
        {title}
      </a>
    </li>
  );
};
