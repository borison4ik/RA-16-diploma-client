import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchHits } from '../../store/reducers/ThunkActionCreators';
import { Card } from '../Card';
import { Preloader } from '../Preloader';

export const Hits: React.FC = () => {
  const { items, isLoading, error } = useAppSelector(
    (state) => state.hitReducer,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHits());
  }, [dispatch]);

  const reloadHandler = () => {
    dispatch(fetchHits());
  };

  if (!items.length && !isLoading) return <></>;

  return (
    <section className='top-sales'>
      <h2 className='text-center'>Хиты продаж!</h2>
      {isLoading ? (
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
        <div className='row'>
          {items.map((item) => (
            <div key={item.id} className='col-4'>
              <Card {...item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
