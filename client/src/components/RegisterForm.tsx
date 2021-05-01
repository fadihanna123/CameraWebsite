import { useState } from "react";
import axios from "axios";
import { IRegisterData, IRegisterForm } from "typings";
import Modal from "./Modal";

const RegisterForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string>("");
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

      const file = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;

      const myForm: FormData = new FormData();
      myForm.append("img", file!.files![0]);

      const { data } = await axios.post<IRegisterData>("register", myForm);

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
      <form encType="multipart/form-data" method="post">
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
          <button type="button" className="btn" onClick={registerUser}>
            Registrera dig
          </button>
        </div>
        <Modal
          viewModal={viewModal}
          setViewModal={setViewModal}
          error={error}
          msg={msg}
          loading={loading}
        />
      </form>
    </>
  );
};

export default RegisterForm;
