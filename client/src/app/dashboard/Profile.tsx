import React from 'react';

// Components
import useTitle from '@hooks/useTitle';
import useReduxConsts from '@hooks/useReduxConsts';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Profile: React.FC = () => {
  const { login } = useReduxConsts();

  useTitle('Surveillance systems Inc - Profil');

  return (
    <main className='main'>
      {login
        ? 'PROFILE PAGE COMING SOON'
        : 'Du måste logga in för att se innehållet'}
    </main>
  );
};

export default Profile;
