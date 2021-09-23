import { Link } from "react-router-dom";

const LogOutBox: React.FC = () => {
  const styles = { logoutLink: { margin: 10 } };

  return (
    <section className="logoutbox">
      <h4>
        <b>Hej {sessionStorage.getItem("Author")}</b>
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
