import { useEffect } from "react";
const Start = () => {
  useEffect(() => {
    document.title = "Surveillance systems Inc - Startsida";
  }, []);

  return (
    <>
      <div className="main">
        <h1>Välkommen!</h1>
        <p>Varsågod logga in ovan för att kunna se dina videofilmer.</p>
      </div>
    </>
  );
};

export default Start;
