import LogoImg from 'assets/logo.webp';
import Login from 'containers/auth/Login';
import { langSwitcher } from 'functions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginReducerTypes } from 'typings';
import Img from 'ui/Img';

const Header: React.FC = () => {
  const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

  const dispatch = useDispatch();

  return (
    <header>
      <nav className="topbar">
        <section className="logobox">
          <Link to="/">
            <Img
              source={LogoImg}
              className={["logoimg"]}
              alt="Logobild"
              ariaLabel="Logobild"
              loading="lazy"
              dimensions={[460, 200]}
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
        {!login && (
          <Link to="/Register" className="link">
            Registrera dig
          </Link>
        )}
        {login && (
          <Link to="/Dashobard" className="link">
            Profil
          </Link>
        )}
        <Link to="/Contact" className="link">
          Kontakta oss
        </Link>
        <Link to="/About" className="link">
          Om oss
        </Link>
        <a onClick={() => langSwitcher("en", dispatch)} className="link">
          EN
        </a>
        <a onClick={() => langSwitcher("sw", dispatch)} className="link">
          SV
        </a>
      </nav>
    </header>
  );
};
export default Header;
