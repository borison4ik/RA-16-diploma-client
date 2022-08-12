import React from 'react';
import { Outlet } from 'react-router-dom';

import { Banner } from '../../components/Banner';

export const Main: React.FC = () => {
  return (
    <main className='container'>
      <div className='row'>
        <div className='col'>
          <Banner />
          <Outlet />
        </div>
      </div>
    </main>
  );
};
