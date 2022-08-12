import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ICategory } from '../../../@types';
import { CategoryItem } from './CategoryItem';

export const Categories: React.FC = () => {
  const [items, setItems] = useState<ICategory[]>([]);

  useEffect(() => {
    axios
      .get<ICategory[]>(`${process.env.REACT_APP_CATEGORIES_API}`)
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  if (!items.length) return <></>;

  return (
    <ul className='catalog-categories nav justify-content-center'>
      <li className='nav-item'>
        <a className='nav-link active' href='#'>
          Все
        </a>
      </li>
      {items.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
