import LogoImg from 'assets/logo.webp';
import Login from 'containers/auth/Login';
import { langSwitcher } from 'functions';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/app';
import { getLang, getLogin } from '../redux/reducers';
import Img from 'ui/Img';
import MainHeader from 'ui/MainHeader';
import Menu from 'ui/Menu';
import React from 'react';
import useTranslate from 'hooks/useTranslate';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Header: React.FC = () => {
  const login = useAppSelector(getLogin);

  const dispatch = useAppDispatch();
  const lang = useAppSelector(getLang);

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
          <i className='fa-solid fa-house'></i> {useTranslate('Start', lang)}
        </Link>
        {!login && (
          <Link to='/Register' className='link'>
            <i className='fa-solid fa-user-plus'></i>{' '}
            {useTranslate('Register', lang)}
          </Link>
        )}
        {login && (
          <Link to='/Profile' className='link'>
            <i className='fa-solid fa-user'></i> {useTranslate('Profile', lang)}
          </Link>
        )}
        <Link to='/Contact' className='link'>
          <i className='fa-solid fa-phone'></i> {useTranslate('Contact', lang)}
        </Link>
        <Link to='/About' className='link'>
          <i className='fa-solid fa-address-card'></i>{' '}
          {useTranslate('About', lang)}
        </Link>
        <Link
          to='#'
          onClick={() => langSwitcher('en', dispatch)}
          className='link'
        >
          <i className='fa-solid fa-language'></i> EN
        </Link>
        <Link
          to='#'
          onClick={() => langSwitcher('sw', dispatch)}
          className='link'
        >
          <i className='fa-solid fa-language'></i> SV
        </Link>
      </Menu>
    </MainHeader>
  );
};

export default Header;
