import { useRecoilState } from "recoil";
import { registerFormState } from "States";

import Modal from "../Modal";
import { RegisterTyper } from "./RegisterTyper";
import { RegisterUser } from "./RegisterUser";

const RegisterForm = () => {
  const [registerForm] = useRecoilState(registerFormState);

  return (
    <form encType="multipart/form-data" method="post">
      <section className="registerbox">
        <section className="registerrow">
          <section className="registercol">
            <label htmlFor="uname">Användarnamn: </label>
          </section>

          <section className="registercol">
            <input
              type="text"
              id="uname"
              value={registerForm.uname}
              onChange={RegisterTyper}
              name="uname"
              required
              className="txtinput"
            />
          </section>
        </section>

        <section className="registerrow">
          <section className="registercol">
            <label htmlFor="email">E-postadress: </label>
          </section>

          <section className="registercol">
            <input
              type="email"
              id="email"
              value={registerForm.email}
              onChange={RegisterTyper}
              required
              className="txtinput"
              name="email"
            />
          </section>
        </section>

        <section className="registerrow">
          <section className="registercol">
            <label htmlFor="mobnr">Mobilnummer: </label>
          </section>

          <section className="registercol">
            <input
              type="text"
              id="mobnr"
              value={registerForm.mobnr}
              onChange={RegisterTyper}
              className="txtinput"
              name="mobnr"
            />
          </section>
        </section>

        <section className="registerrow">
          <section className="registercol">
            <label htmlFor="psw">Lösenord: </label>
          </section>

          <section className="registercol">
            <input
              type="password"
              id="psw"
              value={registerForm.psw}
              onChange={RegisterTyper}
              required
              className="txtinput"
              name="psw"
            />
          </section>
        </section>

        <section className="registerrow">
          <section className="registercol">
            <label htmlFor="repsw">Bekräfta lösenord: </label>
          </section>

          <section className="registercol">
            <input
              type="password"
              id="repsw"
              value={registerForm.repsw}
              onChange={RegisterTyper}
              required
              className="txtinput"
              name="repsw"
            />
          </section>
        </section>

        <section className="registerrow">
          <section className="registercol">
            <label htmlFor="img">Profilbild: </label>
          </section>

          <section className="registerspeccol">
            <input
              type="file"
              id="img"
              value={registerForm.img}
              onChange={RegisterTyper}
              accept="image/*"
              required
              name="img"
            />
          </section>
        </section>
        <button type="button" className="btn" onClick={RegisterUser}>
          Registrera dig
        </button>
      </section>
      <Modal />
    </form>
  );
};

export default RegisterForm;
