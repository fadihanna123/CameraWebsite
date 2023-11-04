import LogoImg from 'assets/logo.webp';
import Login from 'containers/auth/Login';
import { langSwitcher } from 'functions';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { getLogin } from 'redux/reducers';
import Img from 'ui/Img';
import MainHeader from 'ui/MainHeader';
import Menu from 'ui/Menu';
import React from 'react';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Header: React.FC = () => {
  const login = useAppSelector(getLogin);

  const dispatch = useAppDispatch();

  return (
    <MainHeader>
      <nav className='topbar'>
        <section className='logobox'>
          <Link to='/'>
            <Img
              source={LogoImg}
              className={['logoimg']}
              alt='Logobild'
              ariaLabel='Logobild'
              loading='lazy'
              dimensions={[460, 200]}
            />
          </Link>
        </section>
        <section className='loginbox'>
          <Login />
        </section>
      </nav>
      <Menu classNames={['navbar']}>
        <Link to='/' className='link'>
          Start
        </Link>
        {!login && (
          <Link to='/Register' className='link'>
            Registrera dig
          </Link>
        )}
        {login && (
          <Link to='/Dashobard' className='link'>
            Profil
          </Link>
        )}
        <Link to='/Contact' className='link'>
          Kontakta oss
        </Link>
        <Link to='/About' className='link'>
          Om oss
        </Link>
        <a onClick={() => langSwitcher('en', dispatch)} className='link'>
          EN
        </a>
        <a onClick={() => langSwitcher('sw', dispatch)} className='link'>
          SV
        </a>
      </Menu>
    </MainHeader>
  );
};

export default Header;
