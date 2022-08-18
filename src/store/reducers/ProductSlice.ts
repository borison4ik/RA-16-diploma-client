import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../@types';
import { fetchProduct } from './ThunkActionCreators';

interface IProductState {
  product: IProduct | null;
  isLoading: boolean;
  error: string;
}

const initialState: IProductState = {
  product: null,
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.error = '';
      state.product = action.payload;
    },
    [fetchProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
