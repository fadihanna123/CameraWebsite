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
            <li>
              <Link to="/" className="link">
                Start
              </Link>
            </li>
            <li>
              <Link to="/Register" className="link">
                Registrera dig
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Kontakta oss
              </Link>
            </li>
            <li>
              <Link to="/About" className="link">
                Om oss
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
