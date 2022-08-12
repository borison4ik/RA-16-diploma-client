import React from 'react';
import { Link } from 'react-router-dom';
import { CartMini } from '../../components/CartMini';
import { Menu } from '../../components/Menu';
import { SearchForm } from '../../components/SearchForm';

import { DATA } from '../../DATA';

export const Header: React.FC = () => {
  const { headerMenu } = DATA;
  const { url, alt } = DATA.images.logo;
  return (
    <header className='container'>
      <div className='row'>
        <div className='col'>
          <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
              <img src={url} alt={alt} />
            </Link>
            <div className='collapase navbar-collapse' id='navbarMain'>
              <Menu menuItems={headerMenu} classNames={'navbar-nav mr-auto'} />
              <div>
                <div className='header-controls-pics'>
                  <SearchForm />
                  <CartMini />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
