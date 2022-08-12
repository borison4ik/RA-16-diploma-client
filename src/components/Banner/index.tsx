import React from 'react';

import { DATA } from '../../DATA';

export const Banner: React.FC = () => {
  const { url, alt } = DATA.images.banner;

  return (
    <div className='banner'>
      <img src={url} className='img-fluid' alt={alt} />
      <h2 className='banner-header'>К весне готовы!</h2>
    </div>
  );
};
