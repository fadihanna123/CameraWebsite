import { request } from 'api';
import { Flip, toast } from 'react-toastify';
import { IRegisterData } from 'typings';
import { registerEndPoint } from 'utils/envs';

const RegisterUser = async (
  setLoading: (loading: boolean) => void
): Promise<void> => {
  try {
    setLoading(true);

    const file = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const myForm: FormData = new FormData();
    myForm.append("img", file!.files![0]);

    const data: IRegisterData = await request.post(
      registerEndPoint as string,
      myForm
    );

    toast(data.message, { transition: Flip, type: "error" });
  } catch (err) {
    toast((err as Error).message, { transition: Flip, type: "error" });
  } finally {
    setLoading(false);
  }
};

export { RegisterUser };
