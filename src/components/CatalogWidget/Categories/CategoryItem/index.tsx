import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../../@types';
import { useAppDispatch } from '../../../../hooks/redux';
import { chooseCategory } from '../../../../store/reducers/categoriesSlice';

interface CategoryItemProps extends ICategory {
  active: boolean;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  id,
  title,
  active,
}) => {
  const dispatch = useAppDispatch();

  const clickHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(chooseCategory(id));
  };

  return (
    <li className='nav-item'>
      <Link
        onClick={clickHandler}
        className={cn('nav-link', { active })}
        to='#'>
        {title}
      </Link>
    </li>
  );
};
