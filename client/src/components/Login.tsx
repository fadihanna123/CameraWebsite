import axios from "axios";
import { useState, useEffect } from "react";
import { ILoginData, ILoginForm, Props } from "../typings";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Login = ({ login }: Props) => {
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
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
          {viewModal && (
            <div
              style={{ position: "fixed" }}
              onClick={(e) => e.target && setViewModal(!viewModal)}
            >
              <div className="modal">
                <section
                  className="modal-main"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="modal-header">
                    Varning
                    <hr />
                  </div>
                  <div className="modal-body">
                    {loading ? "Laddar..." : error ? error : msg}
                    <br />
                    <hr />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setViewModal(false)}
                  >
                    Stäng
                  </button>
                </section>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="logoutbox">
          <h4>
            <b>Hej {sessionStorage.getItem("Author")}</b>
          </h4>
          <Link to="/Logout">
            <button className="btn" style={{ margin: "10px" }}>
              Logga ut
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

Login.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default Login;
