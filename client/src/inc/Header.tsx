import LogoImg from 'assets/logo.png';
import Login from 'containers/auth/Login';
import { Link } from 'react-router-dom';
import Img from 'ui/Img';

const Header: React.FC = () => (
  <header>
    <nav className="topbar">
      <section className="logobox">
        <Link to="/">
          <Img
            source={LogoImg}
            className="logoimg"
            alt="Logobild"
            ariaLabel="Logobild"
            loading="lazy"
          />
        </Link>
      </section>
      <section className="loginbox">
        <Login />
      </section>
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
