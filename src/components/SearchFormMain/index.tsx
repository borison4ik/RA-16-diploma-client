import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/searchSlice';
import { fetchActiveCaterory } from '../../store/reducers/ThunkActionCreators';

export const SearchFormMain: React.FC = () => {
  const { value } = useAppSelector((state) => state.searchReducer);
  const { activeCategoryId } = useAppSelector(
    (state) => state.categoriesReducer,
  );
  const dispatch = useAppDispatch();
  const { value: query } = useAppSelector((state) => state.searchReducer);

  const changeHanler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSlice.actions.chengeInput(evt.target.value));
  };

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('поиск', value);
    dispatch(fetchActiveCaterory({ id: activeCategoryId, q: query }));
  };

  return (
    <form onSubmit={submitHandler} className='catalog-search-form form-inline'>
      <input
        value={value}
        onChange={changeHanler}
        className='form-control'
        placeholder='Поиск'
      />
    </form>
  );
};
