import axios from "axios";
import { toast, Flip } from "react-toastify";
import { IRegisterData } from "typings";

const RegisterUser = async (
  setLoading: (loading: boolean) => void
): Promise<void> => {
  try {
    const endPoint: string = "register";

    setLoading(true);

    const file = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const myForm: FormData = new FormData();
    myForm.append("img", file!.files![0]);

    const { data } = await axios.post<IRegisterData>(endPoint, myForm);

    toast(data.message, { transition: Flip, type: "error" });
  } catch (err) {
    toast((err as Error).message, { transition: Flip, type: "error" });
  } finally {
    setLoading(false);
  }
};

export { RegisterUser };
