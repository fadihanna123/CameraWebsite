import localforage from "localforage";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { setLang } from "redux/actions";
import { localForageKeys } from "utils/constants";

export const langSwitcher = (lang: string, dispatch: Dispatch<any>) => {
    localforage
        .setItem(localForageKeys.Lang, lang)
        .catch((err) => toast.error((err as Error).message));

    dispatch(setLang(lang));
};
