import { Link } from 'react-router-dom';

// Components
import { langSwitcher } from '../../functions';
import { useTranslate } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../redux/app';
import { getLang, getLogin } from '../../redux/reducers';
import { Menu } from '../../ui';

const NavBar: React.FC = () => {
  const login = useAppSelector(getLogin);

  const dispatch = useAppDispatch();
  const lang = useAppSelector(getLang);

  return (
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
  );
};

export default NavBar;
