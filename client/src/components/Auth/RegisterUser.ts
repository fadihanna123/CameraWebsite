import axios from "axios";
import { useRecoilState } from "recoil";
import { errorState, loadingState, msgState, viewModalState } from "States";
import { IRegisterData } from "typings";

export const RegisterUser = async (): Promise<void> => {
  const [, setLoading] = useRecoilState(loadingState);
  const [, setMsg] = useRecoilState(msgState);
  const [, setError] = useRecoilState(errorState);
  const [, setViewModal] = useRecoilState(viewModalState);

  try {
    setLoading(true);

    const file = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const myForm: FormData = new FormData();
    myForm.append("img", file!.files![0]);

    const { data } = await axios.post<IRegisterData>("register", myForm);

    setViewModal(true);
    setMsg(data.message);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
