import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ICategoryItem } from '../../../@types';
import { Card } from '../../Card';

export const CategoriesList: React.FC = () => {
  const [items, setItems] = useState<ICategoryItem[]>([]);

  useEffect(() => {
    axios
      .get<ICategoryItem[]>(`${process.env.REACT_APP_CATALOG_API}`)
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  if (!items.length) return <></>;

  return (
    <>
      <div className='row'>
        {items.map((item) => (
          <div key={item.id} className='col-4'>
            <Card classNames='catalog-item-card' {...item} />
          </div>
        ))}
      </div>
      <div className='text-center'>
        <button className='btn btn-outline-primary'>Загрузить ещё</button>
      </div>
    </>
  );
};
