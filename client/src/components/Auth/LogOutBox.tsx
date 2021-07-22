import { Link } from "react-router-dom";

const LogOutBox = () => {
  return (
    <section className="logoutbox">
      <h4>
        <b>Hej {sessionStorage.getItem("Author")}</b>
      </h4>
      <Link to="/Logout">
        <button className="btn" style={{ margin: "10px" }}>
          Logga ut
        </button>
      </Link>
    </section>
  );
};

export default LogOutBox;
