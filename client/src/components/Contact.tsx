import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    document.title = "Surveillance systems Inc - Kontakta oss";
  }, []);
  return (
    <>
      <div className="main">
        <h1>Kontakta oss</h1>
        <p>Ni kan nå oss via dessa kontaktuppifter:</p>
        <p>
          <br />
          <b>Telefonnummer: </b>
          <a style={{ padding: "10px" }} href="tel:0808444975" className="link">
            08-08444975
          </a>
          <br />
          <b>Mobilnummer: </b>
          <a style={{ padding: "10px" }} href="tel:072897526" className="link">
            072-897526
          </a>
          <br />
          <b>Facebook: </b>
          <Link style={{ padding: "10px" }} to="/#" className="link">
            Surveillance systems Inc.
          </Link>
          <br />
        </p>
        <div className="contactbox">
          <div className="contactrow">
            <div className="contactcol">
              <label htmlFor="fullname">Fullständigt namn: </label>
            </div>
            <div className="contactcol">
              <input id="fullname" type="text" className="txtinput" />
            </div>
          </div>

          <div className="contactrow">
            <div className="contactcol">
              <label htmlFor="epost">E-postadress: </label>
            </div>
            <div className="contactcol">
              <input id="epost" type="email" className="txtinput" />
            </div>
          </div>

          <div className="contactrow">
            <div className="contactcol">
              <label htmlFor="mobnr">Mobilnummer: </label>
            </div>
            <div className="contactcol">
              <input id="mobnr" type="text" className="txtinput" />
            </div>
          </div>

          <div className="contactrow">
            <div className="contactcol">
              <label htmlFor="msg">Meddelande: </label>
            </div>
            <div className="contactcol">
              <textarea id="msg" className="txtinput"></textarea>
            </div>
          </div>
          <button className="btn">Skicka</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
