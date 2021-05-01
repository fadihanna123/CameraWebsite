import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ILoginData, ILoginForm, Props } from "typings";
import LogOutBox from "./LogOutBox";
import Modal from "./Modal";

const Login = ({ login }: Props) => {
  const [msg, setMsg] = useState<string>("");
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    uname: "",
    psw: "",
  });

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
      if (e.key === "Escape") {
        setViewModal(false);
      }
    };
    document.addEventListener("keydown", esc, false);
    return () => document.removeEventListener("keydown", esc, false);
  }, []);

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
          <Modal
            viewModal={viewModal}
            setViewModal={setViewModal}
            error={error}
            msg={msg}
            loading={loading}
          />
        </>
      ) : (
        <LogOutBox />
      )}
    </>
  );
};

Login.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default Login;
