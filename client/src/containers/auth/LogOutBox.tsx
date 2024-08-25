import React, { useEffect } from 'react';
import { Flip, toast } from 'react-toastify';

// Components
import { doLogOut } from '../../functions';
import useTranslation from '../../hooks/useTranslate';
import { setAuthor } from '../../redux/reducers';
import Btn from '../../ui/Btn';
import Heading from '../../ui/Heading';
import { sessionStorageKeys } from '../../utils/constants';
import useReduxConsts from '../../hooks/useReduxConsts';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const LogOutBox: React.FC = () => {
  const { author, loading, lang, dispatch } = useReduxConsts();

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
