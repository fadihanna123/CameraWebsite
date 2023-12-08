import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/app';
import { getLogin } from 'redux/reducers';
import Heading from 'ui/Heading';
import MainFooter from 'ui/MainFooter';
import React from 'react';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Footer: React.FC = () => {
  const login = useAppSelector(getLogin);

  return (
    <MainFooter classNames={['footerbox']}>
      <section className='footerrow'>
        <section className='footercol'>
          <Heading>Surveillance systems Inc</Heading>
          <address>Sveevägen 5, Stockholm</address>
        </section>

        <ul className='footerlinks'>
          <li>
            <Link to='/' className='link'>
              <i className='fa-solid fa-house'></i> Start
            </Link>
          </li>
          <li>
            {!login && (
              <Link to='/Register' className='link'>
                <i className='fa-solid fa-user-plus'></i> Registrera dig
              </Link>
            )}
          </li>
          {login && (
            <li>
              <Link to='/Dashobard' className='link'>
                <i className='fa-solid fa-user'></i> Profil
              </Link>
            </li>
          )}
          <li>
            <Link to='/Contact' className='link'>
              <i className='fa-solid fa-phone'></i> Kontakta oss
            </Link>
          </li>
          <li>
            <Link to='/About' className='link'>
              <i className='fa-solid fa-address-card'></i> Om oss
            </Link>
          </li>
        </ul>
      </section>
    </MainFooter>
  );
};

export default Footer;
