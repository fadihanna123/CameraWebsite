import { FC } from 'react';

// Components
import Login from '@app/auth/Login';
import MainHeader from '@ui/MainHeader';
import NavBar from './components/NavBar';
import LogoBox from './components/LogoBox';

/**
 * @author Fadi Hanna
 */

const Header: FC = () => {
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
