import { useRecoilState } from "recoil";
import { registerFormState } from "States";

export const RegisterTyper = (e: React.ChangeEvent<HTMLInputElement>) => {
  const [registerForm, setRegisterForm] = useRecoilState(registerFormState);
  setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
};
