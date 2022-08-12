import React from 'react';
import { CatalogWidget } from '../components/CatalogWidget';
import { Hits } from '../components/Hits';

export const Home: React.FC = () => {
  return (
    <>
      <Hits />
      <CatalogWidget />
    </>
  );
};
