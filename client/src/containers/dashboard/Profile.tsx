import useTitle from "hooks/useTitle";
import { LoginReducerTypes } from "models";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
    const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

    useTitle("Surveillance systems Inc - Profil");

    return (
        <main className="main">
            {login ? "" : "Du måste logga in för att se innehållet"}
        </main>
    );
};

export default Profile;
