import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="main">
        <h1 className="errorheading">404 NOT FOUND</h1>
        <p className="errorpara"> Sidan som du letar efter finns inte. </p>
        <Link to="/" className="link">
          Startsida
        </Link>
      </div>
    </>
  );
};

export default Error;
