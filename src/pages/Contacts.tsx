import React from 'react';

import { DATA } from '../DATA';

export const Contacts: React.FC = () => {
  const { email, phones, worckTime, address } = DATA.contacts;
  return (
    <section className='top-sales'>
      <h2 className='text-center'>Контакты</h2>
      <p>{address}</p>
      <h5 className='text-center'>Координаты для связи:</h5>
      <p>
        Телефон: <a href={`tel:${phones}`}>{phones}</a> ({worckTime})
      </p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </section>
  );
};
