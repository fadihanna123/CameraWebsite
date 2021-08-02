import { useRecoilState } from "recoil";
import { loadingState, loginFormState, loginState } from "states";

import LogOutBox from "./LogOutBox";
import axios from "axios";
import { ILoginData } from "typings";
import { Flip, toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [loginForm, setLoginForm] = useRecoilState(loginFormState);
  const [login] = useRecoilState(loginState);
  const [, setLoading] = useRecoilState(loadingState);
  const endPoint: string = "login";

  const CheckLogin = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post<ILoginData>(endPoint, loginForm);

      if (data.accessToken) {
        sessionStorage.setItem("Token", data.accessToken);
        sessionStorage.setItem("Author", data.author);
      } else {
        toast(data.message, { transition: Flip, type: "error" });
      }
    } catch (err) {
      toast((err as Error).message, { transition: Flip, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const typer = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  return (
    <>
      {!login ? (
        <>
          <section className="loginbox">
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
                  onChange={typer}
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
                  onChange={typer}
                  value={loginForm.psw}
                  required
                />
              </div>
            </div>
            <button className="btn" onClick={CheckLogin}>
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
