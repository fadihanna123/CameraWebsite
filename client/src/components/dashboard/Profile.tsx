import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "states";

const Profile = () => {
  const [login] = useRecoilState(loginState);

  useEffect(() => {
    document.title = "Surveillance systems Inc - Profil";
  }, []);

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
