import { Link } from 'react-router-dom';

// Components
import useTranslate from '../../hooks/useTranslate';
import useReduxConsts from '../../hooks/useReduxConsts';

const FooterLinks: React.FC = () => {
  const { login, lang } = useReduxConsts();

  return (
    <ul className='footerlinks'>
      <li>
        <Link to='/' className='link'>
          <i className='fa-solid fa-house'></i> {useTranslate('Start', lang)}
        </Link>
      </li>
      {!login && (
        <li>
          <Link to='/Register' className='link'>
            <i className='fa-solid fa-user-plus'></i>{' '}
            {useTranslate('Register', lang)}
          </Link>
        </li>
      )}
      {login && (
        <li>
          <Link to='/Profile' className='link'>
            <i className='fa-solid fa-user'></i> {useTranslate('Profile', lang)}
          </Link>
        </li>
      )}
      <li>
        <Link to='/Contact' className='link'>
          <i className='fa-solid fa-phone'></i> {useTranslate('Contact', lang)}
        </Link>
      </li>
      <li>
        <Link to='/About' className='link'>
          <i className='fa-solid fa-address-card'></i>{' '}
          {useTranslate('About', lang)}
        </Link>
      </li>
    </ul>
  );
};

export default FooterLinks;
