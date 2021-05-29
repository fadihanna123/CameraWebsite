import { atom } from "recoil";
import { ILoginForm } from "typings";

export const loginState = atom<boolean>({ key: "loginState", default: false });

export const msgState = atom<string>({ key: "msgState", default: "" });

export const viewModalState = atom<boolean>({
  key: "viewModalState",
  default: false,
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});

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
