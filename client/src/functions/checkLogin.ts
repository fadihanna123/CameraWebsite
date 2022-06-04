import localforage from "localforage";
import { ILoginForm } from "models";
import { Flip, toast } from "react-toastify";
import { Dispatch } from "redux";
import { setLoading, setLogin } from "redux/actions";
import { localForageKeys } from "utils/constants";

import { loginUser } from "./auth";
import { RedirectToRoute } from "./helper";

export const checkLogin = async (
    dispatch: Dispatch<any>,
    loginForm: ILoginForm
): Promise<void> => {
    try {
        dispatch(setLoading(true));

        await loginUser(loginForm).then((res) => {
            if (res.accessToken) {
                localforage
                    .setItem(localForageKeys.Token, res.accessToken)
                    .catch((err) => toast.error((err as Error).message));

                localforage
                    .setItem(localForageKeys.Author, res.author)
                    .catch((err) => toast.error((err as Error).message));

                dispatch(setLogin(true));

                RedirectToRoute("/");
            } else {
                toast.error(res.message, { transition: Flip });
            }
        });
    } catch (err) {
        toast.error((err as Error).message, { transition: Flip });
    } finally {
        dispatch(setLoading(false));
    }
};
