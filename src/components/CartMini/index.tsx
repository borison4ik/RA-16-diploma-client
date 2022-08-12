import React from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesPath } from '../../Routes';

export const CartMini: React.FC = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(RoutesPath.CART);
  };
  return (
    <div
      onClick={onClickHandler}
      className='header-controls-pic header-controls-cart'>
      <div className='header-controls-cart-full'>1</div>
      <div className='header-controls-cart-menu'></div>
    </div>
  );
};
