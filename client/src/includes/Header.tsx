import Login from "components/Auth/Login";
import LogoImg from "Images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
