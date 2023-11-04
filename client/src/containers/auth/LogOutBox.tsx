import { doLogOut } from 'functions';
import useTranslation from 'hooks/useTranslation';
import localforage from 'localforage';
import { useEffect } from 'react';
import { Flip, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'redux/app';
import { getAuthor, getLang, getLoading, setAuthor } from 'redux/reducers';
import Btn from 'ui/Btn';
import Heading from 'ui/Heading';
import { localForageKeys } from 'utils/constants';
import React from 'react';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const LogOutBox: React.FC = () => {
  const author = useAppSelector(getAuthor);

  const lang = useAppSelector(getLang);

  const loading = useAppSelector(getLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    localforage
      .getItem(localForageKeys.Author)
      .then((data: any) => setAuthor(data))
      .catch((err) =>
        toast.error((err as Error).message, { transition: Flip })
      );
  }, []);

  return (
    <section className='logoutbox'>
      <Heading headingLevel={4}>
        <b>
          {useTranslation('Hi', lang)}
          {author}
        </b>
      </Heading>
      <Btn disabled={loading} clickFunc={() => doLogOut(dispatch)}>
        {useTranslation('Logout', lang)}
      </Btn>
    </section>
  );
};

export default LogOutBox;
