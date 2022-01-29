import useTitle from 'hooks/useTitle';
import { useSelector } from 'react-redux';
import { LoginReducerTypes } from 'typings';
import Heading from 'ui/Heading';
import Para from 'ui/Para';

import RegisterForm from './RegisterForm';

const Register: React.FC = () => {
  const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

  useTitle("Surveillance systems Inc - Registrera dig");

  return (
    <main className="main">
      {!login ? (
        <>
          <Heading>Registrera dig</Heading>
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
