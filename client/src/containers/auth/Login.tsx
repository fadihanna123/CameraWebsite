import { checkLogin, loginTyper } from 'functions';
import useTranslation from 'hooks/useTranslation';
import { LangReducerTypes, LoginFormReducerTypes, LoginReducerTypes } from 'models';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flip, ToastContainer } from 'react-toastify';
import Btn from 'ui/Btn';
import Heading from 'ui/Heading';
import Input from 'ui/Input';

import LogOutBox from './LogOutBox';

const Login: React.FC = () => {
  const loginForm = useSelector(
    (state: LoginFormReducerTypes) => state.loginFormReducer
  );

  const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

  const lang = useSelector((state: LangReducerTypes) => state.langReducer);

  const dispatch = useDispatch();

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
              clickFunc={() => checkLogin(dispatch, loginForm)}
            >
              {useTranslation('Login', lang)}
            </Btn>
          </section>
          <ToastContainer transition={Flip} />
        </form>
      ) : (
        <LogOutBox />
      )}
    </>
  );
};

export default Login;
