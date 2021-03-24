import axios from "axios";
import { useState } from "react";
import { ILoginData, ILoginForm } from "../typings";

const Login = () => {
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

  const checkLogin = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await axios.post<ILoginData>("login", loginForm);
      if (data.accessToken) {
        sessionStorage.setItem("Token", data.accessToken);
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

  return (
    <>
      <div className="loginbox">
        <h1 className="loginheading">Logga in</h1>
        <div className="loginrow">
          <div className="logincol">
            <label htmlFor="uname">Användarnamn: </label>
          </div>
          <div className="logincol">
            <input
              id="uname"
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
            <label htmlFor="psw">Lösenord: </label>
          </div>
          <div className="logincol">
            <input
              id="psw"
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
            <section className="modal-main">
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
  );
};

export default Login;
