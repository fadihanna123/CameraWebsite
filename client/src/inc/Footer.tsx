import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/app';
import { getLogin } from 'redux/reducers';
import Heading from 'ui/Heading';
import MainFooter from 'ui/MainFooter';

const Footer: React.FC = () => {
  const login = useAppSelector(getLogin);

  return (
    <MainFooter classNames={['footerbox']}>
      <section className='footerrow'>
        <section className='footercol'>
          <Heading>Surveillance systems Inc</Heading>
          <address>Svemevägen 5, Stockholm</address>
        </section>

        <ul className='footerlinks'>
          <li>
            <Link to='/' className='link'>
              Start
            </Link>
          </li>
          <li>
            {!login && (
              <Link to='/Register' className='link'>
                Registrera dig
              </Link>
            )}
          </li>
          {login && (
            <li>
              <Link to='/Dashobard' className='link'>
                Profil
              </Link>
            </li>
          )}
          <li>
            <Link to='/Contact' className='link'>
              Kontakta oss
            </Link>
          </li>
          <li>
            <Link to='/About' className='link'>
              Om oss
            </Link>
          </li>
        </ul>
      </section>
    </MainFooter>
  );
};

export default Footer;
