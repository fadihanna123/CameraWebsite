import { FC } from 'react';

// Components
import MainFooter from '@ui/MainFooter';
import FooterCompanyDetails from './components/FooterCompanyDetails';
import FooterLinks from './components/FooterLinks';

/**
 * @author Fadi Hanna
 */

const Footer: FC = () => {
  return (
    <MainFooter classNames={['footerbox']}>
      <section className='footerrow'>
        <FooterCompanyDetails />
        <FooterLinks />
      </section>
    </MainFooter>
  );
};

export default Footer;
