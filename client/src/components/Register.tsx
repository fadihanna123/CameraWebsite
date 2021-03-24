import axios from "axios";
import { useState } from "react";

import { IRegisterData, IRegisterForm } from "../typings";

const Register = () => {
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    uname: "",
    email: "",
    mobnr: "",
    psw: "",
    repsw: "",
    img: "",
  });

  const typer = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });

  const registerUser = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await axios.post<IRegisterData>(
        "register",
        registerForm
      );
      setViewModal(true);

      setMsg(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="main">
        <h1>Registrera dig</h1>
        <p>Här kan du registrera dig.</p>
        <div className="registerbox">
          <div className="registerrow">
            <div className="registercol">
              <label htmlFor="uname">Användarnamn: </label>
            </div>

            <div className="registercol">
              <input
                type="text"
                id="uname"
                value={registerForm.uname}
                onChange={typer}
                name="uname"
                required
                className="txtinput"
              />
            </div>
          </div>

          <div className="registerrow">
            <div className="registercol">
              <label htmlFor="email">E-postadress: </label>
            </div>

            <div className="registercol">
              <input
                type="email"
                id="email"
                value={registerForm.email}
                onChange={typer}
                required
                className="txtinput"
                name="email"
              />
            </div>
          </div>

          <div className="registerrow">
            <div className="registercol">
              <label htmlFor="mobnr">Mobilnummer: </label>
            </div>

            <div className="registercol">
              <input
                type="text"
                id="mobnr"
                value={registerForm.mobnr}
                onChange={typer}
                className="txtinput"
                name="mobnr"
              />
            </div>
          </div>

          <div className="registerrow">
            <div className="registercol">
              <label htmlFor="psw">Lösenord: </label>
            </div>

            <div className="registercol">
              <input
                type="password"
                id="psw"
                value={registerForm.psw}
                onChange={typer}
                required
                className="txtinput"
                name="psw"
              />
            </div>
          </div>

          <div className="registerrow">
            <div className="registercol">
              <label htmlFor="repsw">Bekräfta lösenord: </label>
            </div>

            <div className="registercol">
              <input
                type="password"
                id="repsw"
                value={registerForm.repsw}
                onChange={typer}
                required
                className="txtinput"
                name="repsw"
              />
            </div>
          </div>

          <div className="registerrow">
            <div className="registercol">
              <label htmlFor="img">Profilbild: </label>
            </div>

            <div className="registerspeccol">
              <input
                type="file"
                id="img"
                value={registerForm.img}
                onChange={typer}
                accept="image/*"
                required
                name="img"
              />
            </div>
          </div>
          <button className="btn" onClick={registerUser}>
            Registrera
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
      </div>
    </>
  );
};

export default Register;
