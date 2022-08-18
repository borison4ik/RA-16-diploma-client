import React from 'react';
import { ICartItem } from '../../../@types';
import { useAppDispatch } from '../../../hooks/redux';
import { cartSlice } from '../../../store/reducers/cartSlice';

type CartItemProps = {
  item: ICartItem;
  num: number;
};

export const CartItem: React.FC<CartItemProps> = ({ item, num }) => {
  const dispatch = useAppDispatch();

  const deleteHandler = (item: ICartItem) => {
    dispatch(cartSlice.actions.removieFromCart(item));
  };
  return (
    <tr>
      <td scope='row'>{num}</td>
      <td>
        <a href='/products/1.html'>{item.title}</a>
      </td>
      <td>{item.size}</td>
      <td>{item.quantity}</td>
      <td>{item.price.toLocaleString('ru-RU')} руб.</td>
      <td>
        {item.total
          ? item.total.toLocaleString('ru-RU')
          : item.price.toLocaleString('ru-RU')}{' '}
        руб.
      </td>
      <td>
        <button
          onClick={() => deleteHandler(item)}
          className='btn btn-outline-danger btn-sm'>
          Удалить
        </button>
      </td>
    </tr>
  );
};
