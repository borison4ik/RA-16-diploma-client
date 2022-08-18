import React from 'react';

import { useAppSelector } from '../../hooks/redux';
import { CartItem } from './CartItem';

export const Cart: React.FC = () => {
  const { items, cartTotal } = useAppSelector((state) => state.cartReducer);

  if (!items.length)
    return (
      <div className='alert alert-info mt-5' role='alert'>
        Ваша корзина пока что пуста!
      </div>
    );

  return (
    <section className='cart'>
      <h2 className='text-center'>Корзина</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Название</th>
            <th scope='col'>Размер</th>
            <th scope='col'>Кол-во</th>
            <th scope='col'>Стоимость</th>
            <th scope='col'>Итого</th>
            <th scope='col'>Действия</th>
          </tr>
        </thead>
        <tbody>
          {items.length &&
            items.map((item, i) => (
              <CartItem
                key={`${item.id}/${item.size}`}
                item={item}
                num={i + 1}
              />
            ))}
          <tr>
            <td colSpan={5} className='text-right'>
              Общая стоимость
            </td>
            <td>{cartTotal.toLocaleString('ru-RU')} руб.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
