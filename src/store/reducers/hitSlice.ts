import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategoryItem } from '../../@types';
import { fetchHits } from './ThunkActionCreators';

interface IHitState {
  items: ICategoryItem[];
  isLoading: boolean;
  error: string;
}

const initialState: IHitState = {
  items: [],
  isLoading: false,
  error: '',
};

export const hitSlice = createSlice({
  name: 'hitSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHits.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchHits.fulfilled.type]: (
      state,
      action: PayloadAction<ICategoryItem[]>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.items = action.payload;
    },
    [fetchHits.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default hitSlice.reducer;
