import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Props } from "typings";
import RegisterForm from "./RegisterForm";

const Register = ({ login }: Props) => {
  // eslint-disable-next-line
  const [viewModal, setViewModal] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Surveillance systems Inc - Registrera dig";
    const esc = (e: any) => {
      if (e.key === "Escape") {
        setViewModal(false);
      }
    };
    document.addEventListener("keydown", esc, false);
    return () => document.removeEventListener("keydown", esc, false);
  }, []);

  return (
    <>
      <div className="main">
        {!login ? (
          <>
            <h1>Registrera dig</h1>
            <p>Här kan du registrera dig.</p>
            <RegisterForm />
          </>
        ) : (
          "Du är redan registrerad."
        )}
      </div>
    </>
  );
};

Register.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default Register;
