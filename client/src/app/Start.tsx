import React from 'react';

// Components
import useTitle from '@hooks/useTitle';
import useTranslate from '@hooks/useTranslate';
import Heading from '@ui/Heading';
import Para from '@ui/Para';
import useReduxConsts from '@hooks/useReduxConsts';
import { getStorage } from '@core/functions';
import { sessionStorageKeys } from '@core/utils/constants';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Start: React.FC = () => {
  const { login, lang } = useReduxConsts();
  const getUserData = JSON.parse(getStorage(sessionStorageKeys.User) ?? '{}');

  useTitle('Surveillance systems Inc - Startsida');
  const welcome = useTranslate('Welcome', lang);
  const welcomeText = useTranslate('Welcome_Text', lang);

  return (
    <main className='main'>
      {login ? (
        <Heading>
          <span>{useTranslate('Welcome', lang)} </span>
          {getUserData.uname.charAt(0).toUpperCase() +
            getUserData.uname.slice(1)}
          !
        </Heading>
      ) : (
        <>
          <Heading>{welcome}!</Heading>
          <Para>{welcomeText}</Para>
        </>
      )}
    </main>
  );
};

export default Start;
