import React from 'react';

import { Categories } from '../components/CatalogWidget/Categories';
import { CategoriesList } from '../components/CatalogWidget/CategoriesList';

export const Catalog: React.FC = () => {
  return (
    <section className='catalog'>
      <h2 className='text-center'>Каталог</h2>
      <form className='catalog-search-form form-inline'>
        <input className='form-control' placeholder='Поиск' />
      </form>
      <Categories />
      <CategoriesList />
    </section>
  );
};
