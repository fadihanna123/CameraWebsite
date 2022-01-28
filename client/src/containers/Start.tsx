import useTitle from 'hooks/useTitle';
import { useEffect } from 'react';
import Heading from 'ui/Heading';
import Para from 'ui/Para';

const Start: React.FC = () => {
  useTitle("Surveillance systems Inc - Startsida");

  return (
    <main className="main">
      <Heading>Välkommen!</Heading>
      <Para>Varsågod logga in ovan för att kunna se dina videofilmer.</Para>
    </main>
  );
};

export default Start;
