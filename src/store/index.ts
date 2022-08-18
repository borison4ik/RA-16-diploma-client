import { configureStore } from '@reduxjs/toolkit';
import hitReducer from '../store/reducers/hitSlice';
import categoriesReducer from '../store/reducers/categoriesSlice';
import searchReducer from '../store/reducers/searchSlice';
import productReducer from '../store/reducers/ProductSlice';
import cartReducer from '../store/reducers/cartSlice';

export const store = configureStore({
  reducer: {
    hitReducer,
    categoriesReducer,
    searchReducer,
    productReducer,
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
