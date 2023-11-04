import useTitle from 'hooks/useTitle';
import { useAppSelector } from 'redux/app';
import { getLogin } from 'redux/reducers';
import Heading from 'ui/Heading';
import Para from 'ui/Para';
import React from 'react';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Start: React.FC = () => {
  const login = useAppSelector(getLogin);

  useTitle('Surveillance systems Inc - Startsida');

  return (
    <main className='main'>
      <Heading>Välkommen!</Heading>
      {!login && (
        <Para>Varsågod logga in ovan för att kunna se dina videofilmer.</Para>
      )}
    </main>
  );
};

export default Start;
