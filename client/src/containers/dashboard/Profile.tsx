import useTitle from 'hooks/useTitle';
import { useSelector } from 'react-redux';
import { getLogin } from '../../redux/reducers';
import React from 'react';

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
