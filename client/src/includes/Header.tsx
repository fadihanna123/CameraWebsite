import { Link } from "react-router-dom";
import LogoImg from "../Images/logo.png";
import Login from "../components/Login";

const Header = () => {
  return (
    <>
      <nav className="topbar">
        <div className="logobox">
          <Link to="/">
            <img src={LogoImg} className="logoimg" alt="Logobild" />
          </Link>
        </div>
        <Login />
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

export default Header;
