import { ILoginForm } from "typings";

export const loginTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  loginForm: ILoginForm,
  setLoginForm: (loginForm: ILoginForm) => void
) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
