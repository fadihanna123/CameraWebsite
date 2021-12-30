import { checkLogin, loginTyper } from "functions";
import React from "react";
import { Flip, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { loadingState, loginFormState, loginState } from "states";

import LogOutBox from "./LogOutBox";

const Login: React.FC = () => {
  const [loginForm, setLoginForm] = useRecoilState(loginFormState);
  const [login] = useRecoilState(loginState);
  const [, setLoading] = useRecoilState(loadingState);

  return (
    <>
      {!login ? (
        <>
          <section className="loginsection">
            <h1 className="loginheading">Logga in</h1>
            <section className="loginrow">
              <section className="logincol">
                <label htmlFor="loginuname">Användarnamn: </label>
              </section>
              <section className="logincol">
                <input
                  id="loginuname"
                  type="text"
                  className="txtinput"
                  name="uname"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    loginTyper(e, loginForm, setLoginForm)
                  }
                  value={loginForm.uname}
                  required
                />
              </section>
            </section>

            <div className="loginrow">
              <div className="logincol">
                <label htmlFor="loginpsw">Lösenord: </label>
              </div>
              <div className="logincol">
                <input
                  id="loginpsw"
                  type="password"
                  className="txtinput"
                  name="psw"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    loginTyper(e, loginForm, setLoginForm)
                  }
                  value={loginForm.psw}
                  required
                />
              </div>
            </div>
            <button
              className="btn"
              onClick={() => checkLogin(setLoading, loginForm)}
            >
              Logga in
            </button>
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
