import useTitle from 'hooks/useTitle';
import { useSelector } from 'react-redux';
import { LoginReducerTypes } from 'typings';

const Profile: React.FC = () => {
  const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

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
