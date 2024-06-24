import React from 'react';

// Components
import { useTitle, useTranslate } from '@core/hooks';
import { useAppSelector } from '@core/redux/app';
import { getLang, getLogin } from '@core/redux/reducers';
import { Heading, Para } from '@core/ui';

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
