import localforage from 'localforage';
import { Link } from 'react-router-dom';
import { localForageKeys } from 'utils/constants';

const LogOutBox: React.FC = () => {
  const styles = { logoutLink: { margin: 10 } };
  const authorVal = localforage.getItem(localForageKeys.Author);

  return (
    <section className="logoutbox">
      <h4>
        <b>Hej {authorVal}</b>
      </h4>
      <Link to="/Logout">
        <button className="btn" style={styles.logoutLink}>
          Logga ut
        </button>
      </Link>
    </section>
  );
};

export default LogOutBox;
