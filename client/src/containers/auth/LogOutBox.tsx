import { doLogOut } from 'functions';
import localforage from 'localforage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthor } from 'redux/actions';
import { AuthorReducerTypes } from 'typings';
import Btn from 'ui/Btn';
import Heading from 'ui/Heading';
import { localForageKeys } from 'utils/constants';

const LogOutBox: React.FC = () => {
  const author = useSelector(
    (state: AuthorReducerTypes) => state.authorReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    localforage.getItem(localForageKeys.Author).then((data) => setAuthor(data));
  }, []);

  return (
    <section className="logoutbox">
      <Heading headingLevel={4}>
        <b>Hej {author}</b>
      </Heading>
      <Btn className="btn" clickFunc={() => doLogOut(dispatch)}>
        Logga ut
      </Btn>
    </section>
  );
};

export default LogOutBox;
