import React, { useEffect, useState } from 'react';
import { loadingStatuses } from '../../../@types';

import {
  fetchActiveCaterory,
  fetchMoreActiveCaterory,
} from '../../../store/reducers/ThunkActionCreators';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Card } from '../../Card';
import { Preloader } from '../../Preloader';

export const CategoriesList: React.FC = () => {
  const { categoriesList, activeCategoryId, loadingStatus, moreBtn, error } =
    useAppSelector((state) => state.categoriesReducer);
  const { value: query } = useAppSelector((state) => state.searchReducer);

  const dispatch = useAppDispatch();
  const [offsetCount, setOffsetCount] = useState<number>(6);

  useEffect(() => {
    console.log('запрос на новую категорию', activeCategoryId);
    setOffsetCount(6);
    if (activeCategoryId) {
      dispatch(fetchActiveCaterory({ id: activeCategoryId, q: query }));
    } else {
      dispatch(fetchActiveCaterory({ id: 0, q: query }));
    }
  }, [activeCategoryId, dispatch]);

  const moreClickHandler = (event: React.MouseEvent) => {
    console.log('more');
    dispatch(
      fetchMoreActiveCaterory({
        id: activeCategoryId,
        offset: offsetCount,
        q: query,
      }),
    );
    setOffsetCount((oldOffsetCount) => oldOffsetCount + 6);
  };

  if (
    !categoriesList.length &&
    loadingStatus !== loadingStatuses.pendingList &&
    !error
  )
    return (
      <div className='alert alert-info' role='alert'>
        По вашему запросу ничего не найдено{' '}
      </div>
    );

  if (error)
    return (
      <div className='alert alert-info' role='alert'>
        Ошибка получения данных с сервера, попробуйте обновить страницу!{' '}
        <button
          className='btn btn-primary float-right'
          onClick={() => window.location.reload()}>
          Обновить
        </button>
        <div className='clearfix'></div>
      </div>
    );

  return (
    <>
      {loadingStatus === loadingStatuses.pendingList ? (
        <Preloader />
      ) : (
        <>
          <div className='row'>
            {categoriesList.map((item) => (
              <div key={item.id} className='col-4 mb-3'>
                <Card classNames='catalog-item-card' {...item} />
              </div>
            ))}
          </div>
          {moreBtn && (
            <div className='text-center mt-3'>
              {loadingStatus === loadingStatuses.pendingMore && <Preloader />}
              <button
                disabled={loadingStatus === loadingStatuses.pendingMore}
                onClick={moreClickHandler}
                className='btn btn-outline-primary'>
                Загрузить ещё
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
