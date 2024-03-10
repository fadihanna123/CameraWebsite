import { doLogOut } from 'functions';
import useTranslation from 'hooks/useTranslate';
import React, { useEffect } from 'react';
import { Flip, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../redux/app';
import {
  getAuthor,
  getLang,
  getLoading,
  setAuthor,
} from '../../redux/reducers';
import Btn from 'ui/Btn';
import Heading from 'ui/Heading';
import { sessionStorageKeys } from 'utils/constants';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const LogOutBox: React.FC = () => {
  const author = useAppSelector(getAuthor);

  const lang = useAppSelector(getLang);

  const loading = useAppSelector(getLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const author = sessionStorage.getItem(sessionStorageKeys.Author) ?? '';

    try {
      setAuthor(author);
    } catch (err) {
      toast.error((err as Error).message, { transition: Flip });
    }
  }, []);

  return (
    <section className='logoutbox'>
      <Heading headingLevel={4}>
        <b>{author}</b>
      </Heading>
      <Btn
        className={['btn']}
        disabled={loading}
        clickFunc={() => doLogOut(dispatch)}
      >
        {useTranslation('Logout', lang)}
      </Btn>
    </section>
  );
};

export default LogOutBox;
