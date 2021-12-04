import { request } from "api";
import { toast, Flip } from "react-toastify";
import { ILoginData, ILoginForm } from "typings";
import { loginEndPoint } from "utils";

export const checkLogin = async (
  setLoading: (loading: boolean) => void,
  loginForm: ILoginForm
): Promise<void> => {
  try {
    setLoading(true);

    const data: ILoginData = await request.post(
      loginEndPoint as string,
      loginForm
    );

    if (data.accessToken) {
      sessionStorage.setItem("Token", data.accessToken);
      sessionStorage.setItem("Author", data.author);
    } else {
      toast(data.message, { transition: Flip, type: "error" });
    }
  } catch (err) {
    toast.error((err as Error).message, { transition: Flip });
  } finally {
    setLoading(false);
  }
};
