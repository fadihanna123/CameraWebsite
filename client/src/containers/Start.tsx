import { useEffect } from "react";

const Start: React.FC = () => {
  useEffect(() => {
    document.title = "Surveillance systems Inc - Startsida";
  }, []);

  return (
    <main className="main">
      <h1>Välkommen!</h1>
      <p>Varsågod logga in ovan för att kunna se dina videofilmer.</p>
    </main>
  );
};

export default Start;
