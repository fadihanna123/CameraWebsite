import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "States";

import RegisterForm from "./RegisterForm";

const Register = () => {
  const [login] = useRecoilState<boolean>(loginState);

  useEffect(() => {
    document.title = "Surveillance systems Inc - Registrera dig";
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

export default Register;
