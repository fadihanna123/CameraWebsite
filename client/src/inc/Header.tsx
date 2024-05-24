import Login from 'containers/auth/Login';
import MainHeader from 'ui/MainHeader';
import React from 'react';
import NavBar from './components/NavBar';
import { LogoBox } from './components';

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
