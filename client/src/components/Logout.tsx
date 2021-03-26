import PropTypes from "prop-types";
import { Props } from "../typings";
import { Redirect, useHistory } from "react-router-dom";

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
