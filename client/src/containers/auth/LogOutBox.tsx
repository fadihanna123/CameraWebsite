import localforage from 'localforage';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Btn from 'ui/Btn';
import Heading from 'ui/Heading';
import { localForageKeys } from 'utils/constants';

const LogOutBox: React.FC = () => {
  const styles = { logoutLink: { margin: 10 } };
  const authorVal = localforage
    .getItem(localForageKeys.Author)
    .catch((err) => toast.error((err as Error).message));

  return (
    <section className="logoutbox">
      <Heading headingLevel={4}>
        <b>Hej {authorVal}</b>
      </Heading>
      <h4>
        <b>Hej {authorVal}</b>
      </h4>
      <Link to="/Logout">
        <Btn className="btn" btnStyle={styles.logoutLink}>
          Logga ut
        </Btn>
      </Link>
    </section>
  );
};

export default LogOutBox;
