import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../@types';

interface ICartSate {
  items: ICartItem[];
  cartTotal: number;
}

const initialState: ICartSate = {
  items: [],
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      let mutation = false;
      state.items.forEach((currentProduct) => {
        if (
          currentProduct.id === action.payload.id &&
          currentProduct.size === action.payload.size
        ) {
          currentProduct.quantity += action.payload.quantity;
          currentProduct.total = currentProduct.quantity * currentProduct.price;
          mutation = true;
        }
      });

      if (!mutation) {
        state.items.push({
          ...action.payload,
          total: action.payload.price * action.payload.quantity,
        });
      }

      state.cartTotal = state.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    },
    removieFromCart(state, action: PayloadAction<ICartItem>) {
      state.items = state.items.filter((item) => {
        if (item.id === action.payload.id) {
          return item.size !== action.payload.size;
        } else {
          return true;
        }
      });
      state.cartTotal = state.items.reduce((sum, item) => {
        return item.total ? sum + item.total : 0;
      }, 0);
    },
    cleanCart(state) {
      state.items = [];
      state.cartTotal = 0;
    },
  },
});

export default cartSlice.reducer;
