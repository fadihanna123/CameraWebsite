import { Flip, toast } from "react-toastify";
import { Dispatch } from "redux";
import { setLoading } from "redux/actions";

import { registerUser } from "./auth";

export const RegisterUser = async (dispatch: Dispatch<any>): Promise<void> => {
    try {
        dispatch(setLoading(true));

        const file = document.querySelector(
            "input[type='file']"
        ) as HTMLInputElement;

        const myForm = new FormData();
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        myForm.append("img", file?.files![0]);

        await registerUser(myForm).then((res) => {
            if (res.message) {
                toast.error(res.message, { transition: Flip });
            }
        });
    } catch (err) {
        toast.error((err as Error).message, { transition: Flip });
    } finally {
        dispatch(setLoading(false));
    }
};
