import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import useTranslation from '@hooks/useTranslate';
import Btn from '@ui/Btn';
import Heading from '@ui/Heading';
import Input from '@ui/Input';
import LogOutBox from '@containers/auth/LogOutBox';
import useReduxConsts from '@hooks/useReduxConsts';
import { checkLogin } from '@functions/checkLogin';
import { useForm } from 'react-hook-form';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Login: React.FC = () => {
  const { lang, login, loading, dispatch } = useReduxConsts();
  const { register, handleSubmit } = useForm<ILoginForm>();
  const navigate = useNavigate();

  return (
    <>
      {!login ? (
        <form
          onSubmit={handleSubmit((loginForm: ILoginForm) => {
            checkLogin(dispatch, navigate, loginForm);
          })}
        >
          <section className='loginsection'>
            <Heading className={['loginheading']}>
              {useTranslation('Login', lang)}
            </Heading>
            <section className='loginrow'>
              <section className='logincol'>
                <label htmlFor='login_uname'>
                  {useTranslation('Username', lang)}:
                </label>
              </section>
              <section className='logincol'>
                <Input
                  name={'uname'}
                  id='login_uname'
                  className={['txtinput']}
                  register={register}
                  isRequired
                />
              </section>
            </section>

            <div className='loginrow'>
              <div className='logincol'>
                <label htmlFor='login_psw'>
                  {useTranslation('Password', lang)}:
                </label>
              </div>
              <div className='logincol'>
                <Input
                  name={'psw'}
                  id='login_psw'
                  type='password'
                  className={['txtinput']}
                  isRequired
                  autoComplete='on'
                  register={register}
                />
              </div>
            </div>
            <Btn className={['btn']} disabled={loading}>
              {useTranslation('Login', lang)}
            </Btn>
          </section>
        </form>
      ) : (
        <LogOutBox />
      )}
    </>
  );
};

export default Login;
