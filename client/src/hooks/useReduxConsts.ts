import { useAppDispatch, useAppSelector } from '../redux/app';
import {
  getAuthor,
  getLang,
  getLoading,
  getLogin,
  getLoginForm,
  getRegisterForm,
} from '../redux/reducers';

const useReduxConsts = () => {
  const loginForm = useAppSelector(getLoginForm);

  const login = useAppSelector(getLogin);

  const lang = useAppSelector(getLang);

  const loading = useAppSelector(getLoading);

  const author = useAppSelector(getAuthor);

  const registerForm = useAppSelector(getRegisterForm);

  const dispatch = useAppDispatch();

  return { loginForm, login, lang, loading, author, registerForm, dispatch };
};

export default useReduxConsts;
