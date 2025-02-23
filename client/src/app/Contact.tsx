import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import useTranslation from '../hooks/useTranslate';
import Btn from '../ui/Btn';
import Heading from '../ui/Heading';
import Input from '../ui/Input';
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
      <Heading>{useTranslation('Contact_Us', lang)}</Heading>
      <span>{useTranslation('Contact_Text', lang)}</span>
      <div className='contactinforow'>
        <div className='contactinfocol'>
          <b>{useTranslation('Phone_Number', lang)}: </b>
        </div>
        <div className='contactinfocol'>
          <a style={styles.p10} href='tel:0808444975' className='contactlink'>
            08-08444975
          </a>
        </div>
        <div className='contactinfocol'>
          <b>{useTranslation('Mobile_Number', lang)}: </b>
        </div>
        <div className='contactinfocol'>
          <a style={styles.p10} href='tel:072897526' className='contactlink'>
            072-897526
          </a>
        </div>
        <div className='contactinfocol'>
          <b>Facebook: </b>
        </div>
        <div className='contactinfocol'>
          <Link style={styles.p10} to='#' className='contactlink'>
            Surveillance systems Inc.
          </Link>
        </div>
      </div>
      <br />
      <section className='contactbox'>
        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='fullname'>
              {useTranslation('Full_Name', lang)}:
            </label>
          </section>
          <section className='contactcol'>
            <Input id='fullname' className={['txtinput']} />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='epost'>
              {useTranslation('Email_Address', lang)}:{' '}
            </label>
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
            <label htmlFor='mobnr'>
              {useTranslation('Mobile_Number', lang)}:{' '}
            </label>
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
          {useTranslation('Send', lang)}
        </Btn>
      </section>
    </main>
  );
};

export default Contact;
