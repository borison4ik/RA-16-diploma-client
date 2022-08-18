import React from 'react';

import { CatalogWidget } from '../components/CatalogWidget';
import { SearchFormMain } from '../components/SearchFormMain';

export const Catalog: React.FC = () => {
  return (
    <CatalogWidget>
      <SearchFormMain />
    </CatalogWidget>
  );
};
