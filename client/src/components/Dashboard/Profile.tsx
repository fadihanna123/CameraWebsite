import PropTypes from "prop-types";
import { useEffect } from "react";
import { Props } from "typings";

const Profile = ({ login }: Props) => {
  useEffect(() => {
    document.title = "Surveillance systems Inc - Profil";
  }, []);
  return (
    <>
      <div className="main">
        {login
          ? {
              /*  Profile */
            }
          : "Du måste logga in för att se innehållet"}
      </div>
    </>
  );
};

Profile.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default Profile;
