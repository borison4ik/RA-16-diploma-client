import React, { useState } from 'react';

import { Form } from './Form';

export const SearchForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const onClickHandler = () => {
    setSearchValue('');
    setIsVisible((oldIsVisible) => !oldIsVisible);
  };

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  return (
    <>
      <div
        onClick={onClickHandler}
        data-id='search-expander'
        className='header-controls-pic header-controls-search'
      />
      {isVisible && (
        <Form searchValue={searchValue} onChangeHandler={onChangeHandler} />
      )}
    </>
  );
};
