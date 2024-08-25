import React from 'react';

// Components
import useTitle from '../hooks/useTitle';
import useTranslate from '../hooks/useTranslate';
import Heading from '../ui/Heading';
import Para from '../ui/Para';
import useReduxConsts from '../hooks/useReduxConsts';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Start: React.FC = () => {
  const { login, lang } = useReduxConsts();

  useTitle('Surveillance systems Inc - Startsida');

  return (
    <main className='main'>
      <Heading>{useTranslate('Welcome', lang)}!</Heading>
      {!login && (
        <Para>Varsågod logga in ovan för att kunna se dina videofilmer.</Para>
      )}
    </main>
  );
};

export default Start;
