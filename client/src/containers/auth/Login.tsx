import { checkLogin, loginTyper } from 'functions';
import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { loadingState, loginFormState, loginState } from 'states';
import Btn from 'ui/Btn';
import Heading from 'ui/Heading';
import Input from 'ui/Input';

import LogOutBox from './LogOutBox';

const Login: React.FC = () => {
  const [loginForm, setLoginForm] = useRecoilState(loginFormState);
  const [login, setLogin] = useRecoilState(loginState);
  const [, setLoading] = useRecoilState(loadingState);

  return (
    <>
      {!login ? (
        <>
          <section className="loginsection">
            <Heading headingLevel={1} className="loginheading">
              Logga in
            </Heading>
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
                    loginTyper(e, loginForm, setLoginForm)
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
                    loginTyper(e, loginForm, setLoginForm)
                  }
                  val={loginForm.psw}
                  isRequired={true}
                />
              </div>
            </div>
            <Btn
              className="btn"
              clickFunc={() => checkLogin(setLoading, loginForm, setLogin)}
            >
              Logga in
            </Btn>
          </section>
          <ToastContainer transition={Flip} />
        </>
      ) : (
        <LogOutBox />
      )}
    </>
  );
};

export default Login;
