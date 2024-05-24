import { useTranslate } from 'hooks';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/app';
import { getLang, getLogin } from '../../redux/reducers';

const FooterLinks: React.FC = () => {
  const login = useAppSelector(getLogin);
  const lang = useAppSelector(getLang);

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
