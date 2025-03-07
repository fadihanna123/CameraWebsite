import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import useTranslation from '@hooks/useTranslate';
import Btn from '@ui/Btn';
import Heading from '@ui/Heading';
import Input from '@ui/Input';
import LogOutBox from '@containers/auth/LogOutBox';
import useReduxConsts from '@hooks/useReduxConsts';
import { loginTyper } from '@functions/loginTyper';
import { checkLogin } from '@functions/checkLogin';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Login: React.FC = () => {
  const { lang, login, loginForm, loading, dispatch } = useReduxConsts();

  const navigate = useNavigate();

  return (
    <>
      {!login ? (
        <form>
          <section className='loginsection'>
            <Heading className={['loginheading']}>
              {useTranslation('Login', lang)}
            </Heading>
            <section className='loginrow'>
              <section className='logincol'>
                <label htmlFor='loginuname'>
                  {useTranslation('Username', lang)}:
                </label>
              </section>
              <section className='logincol'>
                <Input
                  id='loginuname'
                  type='text'
                  className={['txtinput']}
                  name='uname'
                  changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                    loginTyper(e, loginForm, dispatch)
                  }
                  val={loginForm.uname}
                  isRequired={true}
                />
              </section>
            </section>

            <div className='loginrow'>
              <div className='logincol'>
                <label htmlFor='loginpsw'>
                  {useTranslation('Password', lang)}:
                </label>
              </div>
              <div className='logincol'>
                <Input
                  id='loginpsw'
                  type='password'
                  className={['txtinput']}
                  name='psw'
                  changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                    loginTyper(e, loginForm, dispatch)
                  }
                  val={loginForm.psw}
                  isRequired={true}
                  autoComplete='on'
                />
              </div>
            </div>
            <Btn
              className={['btn']}
              clickFunc={() => {
                checkLogin(dispatch, loginForm);
                navigate('/');
              }}
              disabled={loading}
            >
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
