import React from 'react';
import { Cart } from '../components/Cart';
import { OrderForm } from '../components/OrderForm';

export const CartPage: React.FC = () => {
  return (
    <>
      <Cart />
      <OrderForm />
    </>
  );
};
