import { IRegisterForm } from "typings";

const RegisterTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  registerForm: IRegisterForm,
  setRegisterForm: (registerForm: IRegisterForm) => void
): void =>
  setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });

export { RegisterTyper };
