import axios from "axios";
import { toast, Flip, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { loadingState, registerFormState } from "states";
import { IRegisterData } from "typings";

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useRecoilState(registerFormState);
  const [, setLoading] = useRecoilState(loadingState);
  const endPoint: string = "register";

  const RegisterTyper = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });

  const RegisterUser = async (): Promise<void> => {
    try {
      setLoading(true);

      const file = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;

      const myForm: FormData = new FormData();
      myForm.append("img", file!.files![0]);

      const { data } = await axios.post<IRegisterData>(endPoint, myForm);

      toast(data.message, { transition: Flip, type: "error" });
    } catch (err) {
      toast((err as Error).message, { transition: Flip, type: "error" });
    } finally {
      setLoading(false);
    }
  };

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
      <ToastContainer transition={Flip} />
    </form>
  );
};

export default RegisterForm;
