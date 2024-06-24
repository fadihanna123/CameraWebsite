import React from 'react';
import { useSelector } from 'react-redux';

// Components
import useTitle from '@core/hooks/useTitle';
import { getLogin } from '@core/redux/reducers';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Profile: React.FC = () => {
  const login = useSelector(getLogin);

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
