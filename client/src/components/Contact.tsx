import { useEffect } from "react";
import { Link } from "react-router-dom";
import { styleTypes } from "typings";

const Contact = () => {
  useEffect(() => {
    document.title = "Surveillance systems Inc - Kontakta oss";
  }, []);

  const styles: styleTypes = { p10: { padding: "10px" } };

  return (
    <main className="main">
      <h1>Kontakta oss</h1>
      <p>Ni kan nå oss via dessa kontaktuppifter:</p>
      <p>
        <br />
        <b>Telefonnummer: </b>
        <a style={styles.p10} href="tel:0808444975" className="link">
          08-08444975
        </a>
        <br />
        <b>Mobilnummer: </b>
        <a style={styles.p10} href="tel:072897526" className="link">
          072-897526
        </a>
        <br />
        <b>Facebook: </b>
        <Link style={styles.p10} to="/#" className="link">
          Surveillance systems Inc.
        </Link>
        <br />
      </p>
      <section className="contactbox">
        <section className="contactrow">
          <section className="contactcol">
            <label htmlFor="fullname">Fullständigt namn: </label>
          </section>
          <section className="contactcol">
            <input id="fullname" type="text" className="txtinput" />
          </section>
        </section>

        <section className="contactrow">
          <section className="contactcol">
            <label htmlFor="epost">E-postadress: </label>
          </section>
          <section className="contactcol">
            <input id="epost" type="email" className="txtinput" />
          </section>
        </section>

        <section className="contactrow">
          <section className="contactcol">
            <label htmlFor="mobnr">Mobilnummer: </label>
          </section>
          <section className="contactcol">
            <input id="mobnr" type="text" className="txtinput" />
          </section>
        </section>

        <section className="contactrow">
          <section className="contactcol">
            <label htmlFor="msg">Meddelande: </label>
          </section>
          <section className="contactcol">
            <textarea id="msg" className="txtinput"></textarea>
          </section>
        </section>
        <button className="btn">Skicka</button>
      </section>
    </main>
  );
};

export default Contact;
