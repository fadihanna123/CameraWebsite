import React from 'react';

// Components
import useTitle from '../hooks/useTitle';
import useTranslate from '../hooks/useTranslate';
import { useAppSelector } from '../redux/app';
import { getLang, getLogin } from '../redux/reducers';
import Heading from '../ui/Heading';
import Para from '../ui/Para';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Start: React.FC = () => {
  const login = useAppSelector(getLogin);
  const lang = useAppSelector(getLang);

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
