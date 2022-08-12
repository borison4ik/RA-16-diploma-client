import React from 'react';
import cn from 'classnames';

import { MenuItem } from './MenuItem';
import { IMenuItem } from './types';

type MenuProps = {
  menuItems: IMenuItem[];
  classNames: string;
};
export const Menu: React.FC<MenuProps> = ({ menuItems, classNames }) => {
  return (
    <ul className={cn(classNames)}>
      {menuItems &&
        menuItems.map((item, i) => <MenuItem key={i} item={item} />)}
    </ul>
  );
};
