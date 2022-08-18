import React, { useEffect, useRef } from 'react';

type FormProps = {
  searchValue: string;
  onChangeHandler(evt: React.ChangeEvent<HTMLInputElement>): void;
};
export const Form: React.FC<FormProps> = ({ searchValue, onChangeHandler }) => {
  let input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current && input.current.focus();
  }, []);

  return (
    <form
      data-id='search-form'
      className={'header-controls-search-form form-inline'}>
      <input
        ref={input}
        value={searchValue}
        onChange={onChangeHandler}
        className='form-control'
        placeholder='Поиск'
      />
    </form>
  );
};
