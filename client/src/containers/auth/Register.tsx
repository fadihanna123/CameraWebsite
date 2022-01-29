import useTitle from 'hooks/useTitle';
import useTranslation from 'hooks/useTranslation';
import { useSelector } from 'react-redux';
import { LangReducerTypes, LoginReducerTypes } from 'typings';
import Heading from 'ui/Heading';
import Para from 'ui/Para';

import RegisterForm from './RegisterForm';

const Register: React.FC = () => {
  const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

  const lang = useSelector((state: LangReducerTypes) => state.langReducer);

  useTitle("Surveillance systems Inc - Registrera dig");

  return (
    <main className="main">
      {!login ? (
        <>
          <Heading>{useTranslation("Register", lang)}</Heading>
          <Para>{useTranslation("RegisterText", lang)}</Para>
          <RegisterForm />
        </>
      ) : (
        useTranslation("AlreadyRegistredText", lang)
      )}
    </main>
  );
};

export default Register;
