import axios from "axios";
import { useRecoilState } from "recoil";
import {
  errorState,
  loadingState,
  loginFormState,
  msgState,
  viewModalState,
} from "States";
import { ILoginData } from "typings";

export const CheckLogin = async () => {
  const [, setMsg] = useRecoilState(msgState);
  const [, setError] = useRecoilState(errorState);
  const [, setLoading] = useRecoilState(loadingState);
  const [loginForm] = useRecoilState(loginFormState);
  const [, setViewModal] = useRecoilState(viewModalState);

  try {
    setLoading(true);

    const { data } = await axios.post<ILoginData>("login", loginForm);
    if (data.accessToken) {
      sessionStorage.setItem("Token", data.accessToken);
      sessionStorage.setItem("Author", data.author);
    } else {
      setViewModal(true);
      setMsg(data.message);
    }
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
