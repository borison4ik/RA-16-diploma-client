import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RoutesPath } from '../../Routes';
import { searchSlice } from '../../store/reducers/searchSlice';
import { fetchActiveCaterory } from '../../store/reducers/ThunkActionCreators';

import { Form } from './Form';

export const SearchFormTop: React.FC = () => {
  const { activeCategoryId } = useAppSelector(
    (state) => state.categoriesReducer,
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const searchBlock = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location', location.pathname);

  const { value } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    if (!isVisible) {
      dispatch(searchSlice.actions.chengeInput(''));
    } else if (value) {
      if (location.pathname !== RoutesPath.CATALOG) {
        navigate(RoutesPath.CATALOG);
      } else {
        dispatch(fetchActiveCaterory({ id: activeCategoryId, q: value }));
      }
    }

    setIsVisible((oldIsVisible) => !oldIsVisible);
  };

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value === '') {
      setIsVisible(false);
    }
    dispatch(searchSlice.actions.chengeInput(evt.target.value));
  };

  useEffect(() => {
    const handlerClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };
      if (searchBlock.current && !_event.path.includes(searchBlock.current)) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener('click', handlerClickOutside);

    return () =>
      document.body.removeEventListener('click', handlerClickOutside);
  }, []);

  return (
    <div ref={searchBlock} className='search-block'>
      <div
        onClick={onClickHandler}
        data-id='search-expander'
        className='header-controls-pic header-controls-search'
      />
      {isVisible && (
        <Form searchValue={value} onChangeHandler={onChangeHandler} />
      )}
    </div>
  );
};
