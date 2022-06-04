import { ILoginForm, IRegisterForm } from "models";
import { AnyAction } from "redux";
import { SET_AUTHOR, SET_LANG, SET_LOADING, SET_LOGIN, SET_LOGIN_FORM, SET_REGISTER_FORM } from "utils/constants";

export const setLoginForm = (payload: ILoginForm): object => {
    return { type: SET_LOGIN_FORM, payload };
};

export const setLogin = (payload: boolean): AnyAction => {
    return { type: SET_LOGIN, payload };
};

export const setLoading = (payload: boolean): object => {
    return { type: SET_LOADING, payload };
};

export const setAuthor = (payload: unknown): object => {
    return { type: SET_AUTHOR, payload };
};

export const setRegisterForm = (payload: IRegisterForm): object => {
    return { type: SET_REGISTER_FORM, payload };
};

export const setLang = (payload: string): AnyAction => {
    return { type: SET_LANG, payload };
};
