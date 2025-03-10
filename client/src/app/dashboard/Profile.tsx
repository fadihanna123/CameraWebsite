import React from 'react';

// Components
import useTitle from '@hooks/useTitle';
import useReduxConsts from '@hooks/useReduxConsts';
import useTranslate from '@core/hooks/useTranslate';
import { getStorage } from '@core/functions';
import { sessionStorageKeys } from '@core/utils';
import Heading from '@core/ui/Heading';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Profile: React.FC = () => {
  const { login, lang } = useReduxConsts();
  const getUserData = JSON.parse(getStorage(sessionStorageKeys.User) || '{}');

  useTitle('Surveillance systems Inc - Profil');

  return (
    <main className='main'>
      {login ? (
        <>
          <Heading>{getUserData.fullname}</Heading>
        </>
      ) : (
        useTranslate('Login_Require_Text', lang)
      )}
    </main>
  );
};

export default Profile;
