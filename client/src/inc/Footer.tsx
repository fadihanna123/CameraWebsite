import { Link } from 'react-router-dom';
import Heading from 'ui/Heading';

const Footer: React.FC = () => (
  <footer className="footerbox">
    <section className="footerrow">
      <section className="footercol">
        <Heading>Surveillance systems Inc</Heading>
        <address>Svemevägen 5, Stockholm</address>
      </section>

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
    </section>
  </footer>
);

export default Footer;
