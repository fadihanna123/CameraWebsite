import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import useTitle from '@hooks/useTitle';
import useTranslation from '@hooks/useTranslate';
import Btn from '@ui/Btn';
import Heading from '@ui/Heading';
import Input from '@ui/Input';
import TxtArea from '@ui/TxtArea';
import useReduxConsts from '@hooks/useReduxConsts';
import { useForm } from 'react-hook-form';

/**
 * @author Fadi Hanna
 */

const Contact: FC = () => {
  const { register } = useForm();

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

      <form className='contactbox'>
        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='contact_fullname'>
              {useTranslation('Full_Name', lang)}:
            </label>
          </section>
          <section className='contactcol'>
            <Input
              {...register('contact_fullname')}
              id='contact_fullname'
              className={['txtinput']}
            />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='contact_fullname_epost'>
              {useTranslation('Email_Address', lang)}:{' '}
            </label>
          </section>
          <section className='contactcol'>
            <Input
              id='contact_epost'
              {...register('contact_epost')}
              placeHolder='user@gmail.com'
              type='email'
              className={['txtinput']}
            />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='contact_mobnr'>
              {useTranslation('Mobile_Number', lang)}:{' '}
            </label>
          </section>
          <section className='contactcol'>
            <Input
              {...register('contact_mobnr')}
              placeHolder='07X-XXXXXXX'
              id='contact_mobnr'
              className={['txtinput']}
            />
          </section>
        </section>

        <section className='contactrow'>
          <section className='contactcol'>
            <label htmlFor='contact_msg'>
              {useTranslation('Message', lang)}:{' '}
            </label>
          </section>
          <section className='contactcol'>
            <TxtArea
              {...register('contact_msg')}
              id='contact_msg'
              className={['txtArea']}
            ></TxtArea>
          </section>
        </section>
        <Btn disabled={loading} className={['btn']}>
          {useTranslation('Send', lang)}
        </Btn>
      </form>
    </main>
  );
};

export default Contact;
