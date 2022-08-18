import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';
import useStorage from './hooks/useStorage';

import { MainLayout } from './layouts/MainLayout';
import { About } from './pages/About';
import { CartPage } from './pages/CartPage';
import { Catalog } from './pages/Catalog';
import { Contacts } from './pages/Contacts';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { Product } from './pages/Product';

import { RoutesPath } from './Routes';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesPath.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={RoutesPath.CATALOG} element={<Catalog />} />
        <Route path={`${RoutesPath.CATALOG}/:id`} element={<Product />} />
        <Route path={RoutesPath.ABOUT} element={<About />} />
        <Route path={RoutesPath.CONTACTS} element={<Contacts />} />
        <Route path={RoutesPath.CART} element={<CartPage />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  );
};
