import React from 'react';

// Components
import useTitle from '../../hooks/useTitle';
import useTranslation from '../../hooks/useTranslate';
import { useAppSelector } from '../../redux/app';
import { getLang, getLogin } from '../../redux/reducers';
import Heading from '../../ui/Heading';
import Para from '../../ui/Para';
import RegisterForm from './RegisterForm';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Register: React.FC = () => {
  const login = useAppSelector(getLogin);

  const lang = useAppSelector(getLang);

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
