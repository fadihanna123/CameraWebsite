import { Link } from 'react-router-dom';
import { FC } from 'react';

// Components
import Img from '../../ui/Img';
import LogoImg from '../../assets/logo.webp';

const LogoBox: FC = () => {
  return (
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
  );
};

export default LogoBox;
