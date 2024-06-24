import React from 'react';

// Components
import MainFooter from '@core/ui/MainFooter';
import { FooterCompanyDetails, FooterLinks } from './components';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Footer: React.FC = () => {
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
