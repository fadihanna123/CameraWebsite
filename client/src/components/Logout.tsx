import PropTypes from "prop-types";
import { Redirect, useHistory } from "react-router-dom";
import { Props } from "typings";

const Logout = ({ login }: Props) => {
  const history = useHistory();

  const DoLogout = () => {
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("Author");
    history.push("/Start");
  };

  return <>{login ? DoLogout : <Redirect to="/Start" />}</>;
};

Logout.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default Logout;
