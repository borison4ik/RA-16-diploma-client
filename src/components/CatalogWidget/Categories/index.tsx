import React from 'react';

import { CategoryItem } from './CategoryItem';
import { useAppSelector } from '../../../hooks/redux';
import { ICategory } from '../../../@types';

export const Categories: React.FC = () => {
  const { categories, activeCategoryId } = useAppSelector(
    (state) => state.categoriesReducer,
  );
  let prepCategory: Array<ICategory> = [];

  if (categories.length > 0) {
    prepCategory = [{ id: 0, title: 'Все' }, ...categories];
  }

  return (
    <ul className='catalog-categories nav justify-content-center'>
      {prepCategory.map((item) => (
        <CategoryItem
          key={item.id}
          {...item}
          active={item.id === activeCategoryId}
        />
      ))}
    </ul>
  );
};
