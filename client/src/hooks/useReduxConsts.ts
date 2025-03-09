// Components
import { useAppDispatch, useAppSelector } from '@redux/app';
import { getAuthor } from '@redux/reducers/author';
import { getLang } from '@redux/reducers/lang';
import { getLoading } from '@redux/reducers/loading';
import { getLogin } from '@redux/reducers/login';

const useReduxConsts = () => {
  const login = useAppSelector(getLogin);

  const lang = useAppSelector(getLang);

  const loading = useAppSelector(getLoading);

  const author = useAppSelector(getAuthor);

  const dispatch = useAppDispatch();

  return { login, lang, loading, author, dispatch };
};

export default useReduxConsts;
