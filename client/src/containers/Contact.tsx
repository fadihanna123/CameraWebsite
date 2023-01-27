import useTitle from 'hooks/useTitle';
import useTranslation from 'hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/app';
import { getLang } from 'redux/reducers';
import Btn from 'ui/Btn';
import Heading from 'ui/Heading';
import Input from 'ui/Input';
import Para from 'ui/Para';
import TxtArea from 'ui/TxtArea';

const Contact: React.FC = () => {
  useTitle('Surveillance systems Inc - Kontakta oss');

  /**
   * @param {{p10: { padding: string }}}
   */
  const styles = {
    p10: { padding: '10px' },
  };

  const lang = useAppSelector(getLang);

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
            <Input id='epost' type='email' className={['txtinput']} />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='mobnr'>Mobilnummer: </label>
          </section>
          <section className='contactcol'>
            <Input id='mobnr' className={['txtinput']} />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='msg'>{useTranslation('Message', lang)}: </label>
          </section>
          <section className='contactcol'>
            <TxtArea id='msg' className={['txtinput']}></TxtArea>
          </section>
        </section>
        <Btn className={['btn']}>Skicka</Btn>
      </section>
    </main>
  );
};

export default Contact;
