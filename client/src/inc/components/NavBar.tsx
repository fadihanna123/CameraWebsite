import { Link } from 'react-router-dom';

// Components
import { langSwitcher } from '@functions/langSwitcher';
import useTranslate from '@hooks/useTranslate';
import Menu from '@ui/Menu';
import useReduxConsts from '@hooks/useReduxConsts';

const NavBar: React.FC = () => {
  const { login, lang, dispatch } = useReduxConsts();

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
      <div className='langSelectorContainer'>
        <select
          value={lang || 'en'}
          onChange={(e) => langSwitcher(e.target.value, dispatch)}
          name='langList'
          className='langSelector'
        >
          <option value='en'>EN</option>
          <option value='sw'>SV</option>
        </select>
      </div>
    </Menu>
  );
};

export default NavBar;
