import { Link } from "react-router-dom";
import LogoImg from "../Images/logo.png";
import Login from "../components/Login";
import { Props } from "../typings";
import PropTypes from "prop-types";

const Header = ({ login }: Props) => {
  return (
    <>
      <nav className="topbar">
        <div className="logobox">
          <Link to="/">
            <img src={LogoImg} className="logoimg" alt="Logobild" />
          </Link>
        </div>
        <Login login={login} />
      </nav>
      <div className="navbar">
        <Link to="/" className="link">
          Start
        </Link>
        <Link to="/Register" className="link">
          Registrera dig
        </Link>
        <Link to="/Contact" className="link">
          Kontakta oss
        </Link>
        <Link to="/About" className="link">
          Om oss
        </Link>
      </div>
    </>
  );
};

Header.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default Header;
