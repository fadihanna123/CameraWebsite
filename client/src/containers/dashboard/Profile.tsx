import useTitle from 'hooks/useTitle';
import { useSelector } from 'react-redux';
import { getLang } from 'redux/reducers';
import React from 'react';

const Profile: React.FC = () => {
  const login = useSelector(getLang);

  useTitle('Surveillance systems Inc - Profil');

  return (
    <main className='main'>
      {login ? '' : 'Du måste logga in för att se innehållet'}
    </main>
  );
};

export default Profile;
