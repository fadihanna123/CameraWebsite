import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerbox">
        <div className="footerrow">
          <div className="footercol">
            <h1>Surveillance systems Inc</h1>
            <address>Svemevägen 5, Stockholm</address>
          </div>

          <ul className="footerlinks">
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
        </div>
      </div>
    </>
  );
};

export default Footer;
