import React from 'react';

// Components
import { Login } from '@core/containers/auth';
import { MainHeader } from '@core/ui';
import { NavBar, LogoBox } from './components';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Header: React.FC = () => {
  return (
    <MainHeader>
      <nav className='topbar'>
        <LogoBox />
        <section className='loginbox'>
          <Login />
        </section>
      </nav>
      <NavBar />
    </MainHeader>
  );
};

export default Header;
