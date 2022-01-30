import useTitle from 'hooks/useTitle';
import { Link } from 'react-router-dom';
import Heading from 'ui/Heading';
import Para from 'ui/Para';

const Error: React.FC = () => {
  useTitle("Surveillance systems Inc - Sidan finns inte");

  return (
    <main className="main">
      <Heading className={["errorheading"]}>404 NOT FOUND</Heading>
      <Para className={["errorpara"]}>
        Sidan som du letar efter finns inte.
      </Para>
      <Link to="/" className="link">
        Startsida
      </Link>
    </main>
  );
};

export default Error;
