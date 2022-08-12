import React from 'react';
import { Categories } from './Categories';
import { CategoriesList } from './CategoriesList';

export const CatalogWidget: React.FC = () => {
  return (
    <section className='catalog'>
      <h2 className='text-center'>Каталог</h2>
      <Categories />
      <CategoriesList />
    </section>
  );
};
