import useTitle from 'hooks/useTitle';
import { LoginReducerTypes } from 'models';
import { useSelector } from 'react-redux';
import Heading from 'ui/Heading';
import Para from 'ui/Para';

const Start: React.FC = () => {
  const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

  useTitle("Surveillance systems Inc - Startsida");

  return (
    <main className="main">
      <Heading>Välkommen!</Heading>
      {!login && (
        <Para>Varsågod logga in ovan för att kunna se dina videofilmer.</Para>
      )}
    </main>
  );
};

export default Start;
