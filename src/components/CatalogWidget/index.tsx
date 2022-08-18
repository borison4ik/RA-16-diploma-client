import React, { useEffect } from 'react';
import { loadingStatuses } from '../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCategories } from '../../store/reducers/ThunkActionCreators';
import { chooseCategory } from '../../store/reducers/categoriesSlice';
import { Preloader } from '../Preloader';
import { Categories } from './Categories';
import { CategoriesList } from './CategoriesList';

type CatalogWidgetProps = {
  children?: React.ReactNode;
};
export const CatalogWidget: React.FC<CatalogWidgetProps> = ({ children }) => {
  const { loadingStatus, error } = useAppSelector(
    (state) => state.categoriesReducer,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());

    return () => {
      dispatch(chooseCategory(0));
    };
  }, [dispatch]);

  const reloadHandler = () => {
    dispatch(fetchCategories());
  };

  return (
    <section className='catalog'>
      <h2 className='text-center'>Каталог</h2>
      {children}
      {loadingStatus === loadingStatuses.pendingAll ? (
        <Preloader />
      ) : error ? (
        <div className='alert alert-info' role='alert'>
          Ошибка получения данных с сервера, попробуйте обновить страницу!{' '}
          <button
            className='btn btn-primary float-right'
            onClick={reloadHandler}>
            Обновить
          </button>
          <div className='clearfix'></div>
        </div>
      ) : (
        <>
          <Categories />
          <CategoriesList />
        </>
      )}
    </section>
  );
};
