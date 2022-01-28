import useTitle from 'hooks/useTitle';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginState } from 'states';

const Profile: React.FC = () => {
  const [login] = useRecoilState(loginState);

  useTitle("Surveillance systems Inc - Profil");

  return (
    <main className="main">
      {login
        ? {
            /*  Profile */
          }
        : "Du måste logga in för att se innehållet"}
    </main>
  );
};

export default Profile;
