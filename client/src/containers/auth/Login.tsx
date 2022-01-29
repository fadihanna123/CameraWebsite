import { checkLogin, loginTyper } from 'functions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flip, ToastContainer } from 'react-toastify';
import { LoginFormReducerTypes, LoginReducerTypes } from 'typings';
import Btn from 'ui/Btn';
import Heading from 'ui/Heading';
import Input from 'ui/Input';

import LogOutBox from './LogOutBox';

const Login: React.FC = () => {
  const loginForm = useSelector(
    (state: LoginFormReducerTypes) => state.loginFormReducer
  );

  const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

  const dispatch = useDispatch();

  return (
    <>
      {!login ? (
        <form>
          <section className="loginsection">
            <Heading className="loginheading">Logga in</Heading>
            <section className="loginrow">
              <section className="logincol">
                <label htmlFor="loginuname">Användarnamn: </label>
              </section>
              <section className="logincol">
                <Input
                  id="loginuname"
                  type="text"
                  className="txtinput"
                  name="uname"
                  changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                    loginTyper(e, loginForm, dispatch)
                  }
                  val={loginForm.uname}
                  isRequired={true}
                />
              </section>
            </section>

            <div className="loginrow">
              <div className="logincol">
                <label htmlFor="loginpsw">Lösenord: </label>
              </div>
              <div className="logincol">
                <Input
                  id="loginpsw"
                  type="password"
                  className="txtinput"
                  name="psw"
                  changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                    loginTyper(e, loginForm, dispatch)
                  }
                  val={loginForm.psw}
                  isRequired={true}
                />
              </div>
            </div>
            <Btn
              className="btn"
              clickFunc={() => checkLogin(dispatch, loginForm)}
            >
              Logga in
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
