import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ICategoryItem, loadingStatuses } from '../../@types';
import {
  fetchActiveCaterory,
  fetchCategories,
  fetchMoreActiveCaterory,
} from './ThunkActionCreators';

interface ICategoriesState {
  categories: ICategory[];
  categoriesList: ICategoryItem[];
  activeCategoryId: number;
  loadingStatus: string;
  error: string;
  moreBtn: boolean;
}

const initialState: ICategoriesState = {
  categories: [],
  categoriesList: [],
  activeCategoryId: 0,
  loadingStatus: loadingStatuses.fulfilled, // 'pendingAll' | 'pendingList' | fulfilled | rejected
  error: '',
  moreBtn: false,
};

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    chooseCategory(state, action: PayloadAction<number>) {
      state.activeCategoryId = action.payload;
    },
  },
  extraReducers: {
    [fetchCategories.pending.type]: (state) => {
      state.loadingStatus = loadingStatuses.pendingAll;
      state.error = '';
    },
    [fetchCategories.fulfilled.type]: (
      state,
      action: PayloadAction<{
        categories: ICategory[];
        categoriesList: ICategoryItem[];
      }>,
    ) => {
      state.loadingStatus = loadingStatuses.fulfilled;
      state.error = '';
      state.categories = action.payload.categories;
      state.categoriesList = action.payload.categoriesList;
      state.moreBtn = action.payload.categoriesList.length >= 6;
    },
    [fetchCategories.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loadingStatus = loadingStatuses.rejected;
      state.error = action.payload;
    },

    [fetchActiveCaterory.pending.type]: (state) => {
      state.loadingStatus = loadingStatuses.pendingList;
      state.error = '';
    },
    [fetchActiveCaterory.fulfilled.type]: (
      state,
      action: PayloadAction<ICategoryItem[]>,
    ) => {
      state.loadingStatus = loadingStatuses.fulfilled;
      state.categoriesList = action.payload;
      state.moreBtn = action.payload.length >= 6;
    },
    [fetchActiveCaterory.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.loadingStatus = loadingStatuses.rejected;
      state.error = action.payload;
    },

    [fetchMoreActiveCaterory.pending.type]: (state) => {
      state.loadingStatus = loadingStatuses.pendingMore;
      state.error = '';
    },
    [fetchMoreActiveCaterory.fulfilled.type]: (
      state,
      action: PayloadAction<ICategoryItem[]>,
    ) => {
      state.loadingStatus = loadingStatuses.fulfilled;
      state.categoriesList = state.categoriesList.concat(action.payload);
      state.moreBtn = action.payload.length >= 6;
    },
    [fetchMoreActiveCaterory.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.loadingStatus = loadingStatuses.rejected;
      state.error = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
export const { chooseCategory } = categoriesSlice.actions;
