import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginFormState, loginState, viewModalState } from "States";

import LogOutBox from "./LogOutBox";
import Modal from "../Modal";
import { CheckLogin } from "./CheckLogin";

const Login = () => {
  const [, setViewModal] = useRecoilState(viewModalState);
  const [loginForm, setLoginForm] = useRecoilState(loginFormState);
  const [login] = useRecoilState(loginState);

  const typer = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  useEffect(() => {
    const esc = (e: any) => {
      e.key === "Escape" && setViewModal(false);
    };
    document.addEventListener("keydown", esc, false);
    return () => document.removeEventListener("keydown", esc, false);
  }, [setViewModal]);

  return (
    <>
      {!login ? (
        <>
          <div className="loginbox">
            <h1 className="loginheading">Logga in</h1>
            <div className="loginrow">
              <div className="logincol">
                <label htmlFor="loginuname">Användarnamn: </label>
              </div>
              <div className="logincol">
                <input
                  id="loginuname"
                  type="text"
                  className="txtinput"
                  name="uname"
                  onChange={typer}
                  value={loginForm.uname}
                  required
                />
              </div>
            </div>

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
                  onChange={typer}
                  value={loginForm.psw}
                  required
                />
              </div>
            </div>
            <button className="btn" onClick={CheckLogin}>
              Logga in
            </button>
          </div>
          <Modal />
        </>
      ) : (
        <LogOutBox />
      )}
    </>
  );
};

export default Login;
