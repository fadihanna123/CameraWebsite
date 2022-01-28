import { RegisterTyper, RegisterUser } from 'functions';
import React from 'react';
import { Flip, ToastContainer } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { loadingState, registerFormState } from 'states';
import { IRegisterForm } from 'typings';
import Btn from 'ui/Btn';
import FileUploader from 'ui/FileUploader';
import Input from 'ui/Input';

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
            <Input
              id="uname"
              val={registerForm.uname}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
              name="uname"
              isRequired={true}
              className="txtinput"
            />
          </section>
        </section>
        <section className="registerrow">
          <section className="registercol">
            <label htmlFor="email">E-postadress: </label>
          </section>
          <section className="registercol">
            <Input
              type="email"
              id="email"
              val={registerForm.email}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
              isRequired={true}
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
            <Input
              type="text"
              id="mobnr"
              val={registerForm.mobnr}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
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
            <Input
              type="password"
              id="psw"
              val={registerForm.psw}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
              isRequired={true}
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
            <Input
              type="password"
              id="repsw"
              val={registerForm.repsw}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
              isRequired={true}
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
            <FileUploader
              type="file"
              id="img"
              val={registerForm.img}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm as IRegisterForm, setRegisterForm)
              }
              acceptValues="image/*"
              isRequired={true}
              name="img"
            />
          </section>
        </section>
        <Btn className="btn" clickFunc={() => RegisterUser(setLoading)}>
          Registrera dig
        </Btn>
      </section>
      <ToastContainer transition={Flip} />
    </form>
  );
};

export default RegisterForm;
