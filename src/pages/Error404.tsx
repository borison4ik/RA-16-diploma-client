import React from 'react';
import { Link } from 'react-router-dom';

export const Error404: React.FC = () => {
  return (
    <section className='top-sales'>
      <h2 className='text-center'>Страница не найдена</h2>
      <p>
        Извините, такая страница не найдена! <Link to='/'>На главную</Link>
      </p>
    </section>
  );
};
