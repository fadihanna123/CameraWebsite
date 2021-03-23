import { Link } from "react-router-dom";
import LogoImg from "../Images/logo.png";

const Header = () => {
  return (
    <>
      <nav className="topbar">
        <div className="logobox">
          <Link to="/">
            <img src={LogoImg} className="logoimg" alt="Logobild" />
          </Link>
        </div>
        <div className="loginbox">
          <h1 className="loginheading">Logga in</h1>
          <div className="loginrow">
            <div className="logincol">
              <label htmlFor="uname">Användarnamn: </label>
            </div>
            <div className="logincol">
              <input id="uname" type="text" className="txtinput" />
            </div>
          </div>

          <div className="loginrow">
            <div className="logincol">
              <label htmlFor="psw">Lösenord: </label>
            </div>
            <div className="logincol">
              <input id="psw" type="password" className="txtinput" />
            </div>
          </div>
          <button className="btn">Logga in</button>
        </div>
      </nav>
      <ul className="navbar">
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
      </ul>
    </>
  );
};

export default Header;
