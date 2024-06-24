import React from 'react';

// Components
import useTitle from '@core/hooks/useTitle';
import useTranslation from '@core/hooks/useTranslate';
import { useAppSelector } from '@core/redux/app';
import { getLang, getLogin } from '@core/redux/reducers';
import Heading from '@core/ui/Heading';
import Para from '@core/ui/Para';
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
