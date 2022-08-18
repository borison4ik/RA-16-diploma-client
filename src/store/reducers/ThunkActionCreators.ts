import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICategory, ICategoryItem, IProduct } from '../../@types';

export const fetchHits = createAsyncThunk(
  'hit/fetchHits',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ICategoryItem[]>(
        `${process.env.REACT_APP_HITS_API}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка загрузки с сервера');
    }
  },
);

export const fetchCategories = createAsyncThunk(
  'catecories/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const responseAll = await Promise.all([
        axios.get<ICategory[]>(`${process.env.REACT_APP_CATEGORIES_API}`),
        axios.get<ICategoryItem[]>(`${process.env.REACT_APP_CATALOG_API}`),
      ]);

      return thunkAPI.fulfillWithValue({
        categories: responseAll[0].data,
        categoriesList: responseAll[1].data,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка загрузки с сервера');
    }
  },
);

export const fetchActiveCaterory = createAsyncThunk(
  'catecories/fetchActiveCaterory',
  async (params: { id: number; q?: string }, thunkAPI) => {
    const { id, q } = params;
    try {
      const response = await axios.get<ICategoryItem[]>(
        `${process.env.REACT_APP_CATALOG_API}?${id ? `categoryId=${id}` : ''}${
          q ? `&q=${q}` : ''
        }`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка загрузки с сервера');
    }
  },
);

export const fetchMoreActiveCaterory = createAsyncThunk(
  'catecories/fetchMoreActiveCaterory',
  async (params: { id: number; offset?: number; q?: string }, thunkAPI) => {
    const { id, offset, q } = params;
    try {
      const response = await axios.get<ICategoryItem[]>(
        `${process.env.REACT_APP_CATALOG_API}?${id ? `categoryId=${id}` : ''}${
          offset ? `&offset=${offset}` : ''
        }${q ? `&q=${q}` : ''}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка загрузки с сервера');
    }
  },
);

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<IProduct>(
        `${process.env.REACT_APP_PRODUCT_API}/${id}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка загрузки с сервера');
    }
  },
);
