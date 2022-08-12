import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ICategoryItem } from '../../@types';
import { Card } from '../Card';

export const Hits: React.FC = () => {
  const [items, setItems] = useState<ICategoryItem[]>([]);

  useEffect(() => {
    axios
      .get<ICategoryItem[]>(`${process.env.REACT_APP_HITS_API}`)
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  if (!items.length) return <></>;

  return (
    <section className='top-sales'>
      <h2 className='text-center'>Хиты продаж!</h2>
      <div className='row'>
        {items.map((item) => (
          <div key={item.id} className='col-4'>
            <Card {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};
