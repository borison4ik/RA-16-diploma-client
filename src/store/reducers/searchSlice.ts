import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchState {
  value: string;
}

const initialState: ISearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    chengeInput(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export default searchSlice.reducer;
