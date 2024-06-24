import React from 'react';

// Components
import { useTitle, useTranslate } from '../hooks';
import { useAppSelector } from '../redux/app';
import { getLang, getLogin } from '../redux/reducers';
import { Heading, Para } from '../ui';

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
