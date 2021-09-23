import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "states";

import RegisterForm from "./RegisterForm";

const Register: React.FC = () => {
  const [login] = useRecoilState<boolean>(loginState);

  useEffect(() => {
    document.title = "Surveillance systems Inc - Registrera dig";
  }, []);

  return (
    <main className="main">
      {!login ? (
        <>
          <h1>Registrera dig</h1>
          <p>Här kan du registrera dig.</p>
          <RegisterForm />
        </>
      ) : (
        "Du är redan registrerad."
      )}
    </main>
  );
};

export default Register;
