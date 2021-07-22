import { atom } from "recoil";
import { ILoginForm } from "typings";

export const loginState = atom<boolean>({ key: "loginState", default: false });

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});

export const loginFormState = atom<ILoginForm>({
  key: "loginFormState",
  default: {
    uname: "",
    psw: "",
  },
});

export const registerFormState = atom({
  key: "registerFormState",
  default: {
    uname: "",
    email: "",
    mobnr: "",
    psw: "",
    repsw: "",
    img: "",
  },
});
