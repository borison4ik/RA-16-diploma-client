import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from '../types';

type MenuItemProps = {
  item: IMenuItem;
};

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <li className='nav-item'>
      <Link className='nav-link' to={item.url}>
        {item.title}
      </Link>
    </li>
  );
};
