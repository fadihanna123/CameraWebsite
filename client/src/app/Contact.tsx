import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import useTranslation from '../hooks/useTranslate';
import Btn from '../ui/Btn';
import Heading from '../ui/Heading';
import Input from '../ui/Input';
import Para from '../ui/Para';
import TxtArea from '../ui/TxtArea';
import useReduxConsts from '../hooks/useReduxConsts';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Contact: React.FC = () => {
  useTitle('Surveillance systems Inc - Kontakta oss');
  /**
   * @param {{ p10: { padding: string }}}
   */
  const styles = {
    p10: { padding: '10px' },
  };
  const { lang, loading } = useReduxConsts();
  return (
    <main className='main'>
      <Heading>Kontakta oss</Heading>
      <Para>Ni kan nå oss via dessa kontaktuppifter:</Para>
      <Para>
        <br />
        <b>Telefonnummer: </b>
        <a style={styles.p10} href='tel:0808444975' className='link'>
          08-08444975
        </a>
        <br />
        <b>Mobilnummer: </b>
        <a style={styles.p10} href='tel:072897526' className='link'>
          072-897526
        </a>
        <br />
        <b>Facebook: </b>
        <Link style={styles.p10} to='/#' className='link'>
          Surveillance systems Inc.
        </Link>
        <br />
      </Para>
      <section className='contactbox'>
        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='fullname'>Fullständigt namn: </label>
          </section>
          <section className='contactcol'>
            <Input id='fullname' className={['txtinput']} />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='epost'>E-postadress: </label>
          </section>
          <section className='contactcol'>
            <Input
              id='epost'
              placeHolder='user@gmail.com'
              type='email'
              className={['txtinput']}
            />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='mobnr'>Mobilnummer: </label>
          </section>
          <section className='contactcol'>
            <Input
              placeHolder='07X-XXXXXXX'
              id='mobnr'
              className={['txtinput']}
            />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='msg'>{useTranslation('Message', lang)}: </label>
          </section>
          <section className='contactcol'>
            <TxtArea id='msg' className={['txtArea']}></TxtArea>
          </section>
        </section>
        <Btn disabled={loading} className={['btn']}>
          Skicka
        </Btn>
      </section>
    </main>
  );
};

export default Contact;
