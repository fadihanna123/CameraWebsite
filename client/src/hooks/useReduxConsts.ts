// Components
import { useAppDispatch, useAppSelector } from '@redux/app';
import { getAuthor } from '@redux/reducers/author';
import { getLang } from '@redux/reducers/lang';
import { getLoading } from '@redux/reducers/loading';
import { getLogin } from '@redux/reducers/login';
import { getLoginForm } from '@redux/reducers/loginForm';
import { getRegisterForm } from '@redux/reducers/registerForm';

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
