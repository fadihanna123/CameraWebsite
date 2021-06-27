import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState, viewModalState } from "States";

import RegisterForm from "./RegisterForm";

const Register = () => {
  const [, setViewModal] = useRecoilState<boolean>(viewModalState);
  const [login] = useRecoilState<boolean>(loginState);

  useEffect(() => {
    document.title = "Surveillance systems Inc - Registrera dig";
    const esc = (e: any) => e.key === "Escape" && setViewModal(false);
    document.addEventListener("keydown", esc, false);
    return () => document.removeEventListener("keydown", esc, false);
  }, [setViewModal]);

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
