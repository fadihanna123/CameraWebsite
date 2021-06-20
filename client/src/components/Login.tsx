import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  errorState,
  loadingState,
  loginFormState,
  loginState,
  msgState,
  viewModalState,
} from "States";
import { ILoginData } from "typings";

import LogOutBox from "./LogOutBox";
import Modal from "./Modal";

const Login = () => {
  const [, setMsg] = useRecoilState(msgState);
  const [, setViewModal] = useRecoilState(viewModalState);
  const [, setError] = useRecoilState(errorState);
  const [, setLoading] = useRecoilState(loadingState);
  const [loginForm, setLoginForm] = useRecoilState(loginFormState);
  const [login] = useRecoilState(loginState);

  const typer = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const checkLogin = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post<ILoginData>("login", loginForm);
      if (data.accessToken) {
        sessionStorage.setItem("Token", data.accessToken);
        sessionStorage.setItem("Author", data.author);
      } else {
        setViewModal(true);
        setMsg(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
            <button className="btn" onClick={checkLogin}>
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
