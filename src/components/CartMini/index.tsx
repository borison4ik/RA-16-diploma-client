import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { cartSlice } from '../../store/reducers/cartSlice';
import useStorage from '../../hooks/useStorage';
import { RoutesPath } from '../../Routes';
import { ICartItem } from '../../@types';

export const CartMini: React.FC = () => {
  const { items } = useAppSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isMounted = useRef(false);
  const [cartStorage, setCartStorage] = useStorage(localStorage, 'cart', true);

  useEffect(() => {
    if (isMounted.current) {
      setCartStorage(items);
    } else {
      console.log('cartStorage', cartStorage);
      if (cartStorage && cartStorage.length > 0) {
        cartStorage.forEach((item: ICartItem) => {
          dispatch(cartSlice.actions.addToCart(item));
        });
      }
    }
    isMounted.current = true;
  }, [items]);

  const onClickHandler = () => {
    navigate(RoutesPath.CART);
  };

  return (
    <div
      onClick={onClickHandler}
      className='header-controls-pic header-controls-cart'>
      {items.length ? (
        <div className='header-controls-cart-full'>
          {items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0)}
        </div>
      ) : null}

      <div className='header-controls-cart-menu'></div>
    </div>
  );
};
