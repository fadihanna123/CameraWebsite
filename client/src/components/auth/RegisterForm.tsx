import { RegisterTyper, RegisterUser } from "functions";
import React from "react";
import { Flip, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { loadingState, registerFormState } from "states";
import { IRegisterForm } from "typings";

const RegisterForm: React.FC = () => {
  const [registerForm, setRegisterForm] = useRecoilState(registerFormState);
  const [, setLoading] = useRecoilState(loadingState);

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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
              accept="image/*"
              required
              name="img"
            />
          </section>
        </section>
        <button
          type="button"
          className="btn"
          onClick={() => RegisterUser(setLoading)}
        >
          Registrera dig
        </button>
      </section>
      <ToastContainer transition={Flip} />
    </form>
  );
};

export default RegisterForm;
