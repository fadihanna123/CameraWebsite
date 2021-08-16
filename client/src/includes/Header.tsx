import Login from "components/auth/Login";
import LogoImg from "images/logo.png";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="topbar">
      <section className="logobox">
        <Link to="/">
          <img src={LogoImg} className="logoimg" alt="Logobild" />
        </Link>
      </section>
      <Login />
    </nav>
    <nav className="navbar">
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
    </nav>
  </header>
);

export default Header;
