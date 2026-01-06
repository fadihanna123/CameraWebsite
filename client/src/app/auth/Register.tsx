import { FC } from 'react';

// Components
import useTitle from '@hooks/useTitle';
import useTranslation from '@hooks/useTranslate';
import Heading from '@ui/Heading';
import Para from '@ui/Para';
import RegisterForm from '@containers/auth/RegisterForm';
import useReduxConsts from '@hooks/useReduxConsts';

/**
 * @author Fadi Hanna
 */

const Register: FC = () => {
  const { login, lang } = useReduxConsts();

  useTitle('Surveillance systems Inc - Registrera dig');

  return (
    <main className='main'>
      {!login ? (
        <>
          <Heading>{useTranslation('Register', lang)}</Heading>
          <Para>{useTranslation('RegisterText', lang)}</Para>
          <RegisterForm />
        </>
      ) : (
        useTranslation('AlreadyRegistredText', lang)
      )}
    </main>
  );
};

export default Register;
