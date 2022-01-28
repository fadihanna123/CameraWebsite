import useTitle from 'hooks/useTitle';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginState } from 'states';
import Heading from 'ui/Heading';
import Para from 'ui/Para';

import RegisterForm from './RegisterForm';

const Register: React.FC = () => {
  const [login] = useRecoilState<boolean>(loginState);

  useTitle("Surveillance systems Inc - Registrera dig");

  return (
    <main className="main">
      {!login ? (
        <>
          <Heading headingLevel={1}>Registrera dig</Heading>
          <Para>Här kan du registrera dig.</Para>
          <RegisterForm />
        </>
      ) : (
        "Du är redan registrerad."
      )}
    </main>
  );
};

export default Register;
