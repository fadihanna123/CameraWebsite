import React from 'react';
import { Link } from 'react-router-dom';

// Components
import useTitle from '@core/hooks/useTitle';
import { Heading, Para } from '@core/ui';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Error: React.FC = () => {
  useTitle('Surveillance systems Inc - Sidan finns inte');

  return (
    <main className='main'>
      <Heading className={['errorheading']}>404 NOT FOUND</Heading>
      <Para className={['errorpara']}>
        Sidan som du letar efter finns inte.
      </Para>
      <Link to='/' className='link'>
        Startsida
      </Link>
    </main>
  );
};

export default Error;
