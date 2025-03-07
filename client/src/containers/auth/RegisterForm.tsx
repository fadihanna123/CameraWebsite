import React from 'react';

// Components
import useTranslation from '@hooks/useTranslate';
import Btn from '@ui/Btn';
import FileUploader from '@ui/FileUploader';
import Input from '@ui/Input';
import useReduxConsts from '@hooks/useReduxConsts';
import { RegisterTyper } from '@functions/RegisterTyper';
import { RegisterUser } from '@functions/registerUser';
import { useNavigate } from 'react-router-dom';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const RegisterForm: React.FC = () => {
  const { registerForm, lang, loading, dispatch } = useReduxConsts();
  const navigate = useNavigate();

  return (
    <form encType='multipart/form-data' method='post'>
      <section className='registerbox'>
        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='uname'>{useTranslation('Username', lang)}: </label>
          </section>
          <section className='registercol'>
            <Input
              id='uname'
              val={registerForm.uname}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm, dispatch)
              }
              name='uname'
              isRequired={true}
              className={['txtinput']}
            />
          </section>
        </section>
        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='email'>{useTranslation('Email', lang)}: </label>
          </section>
          <section className='registercol'>
            <Input
              type='email'
              id='email'
              placeHolder='user@gmail.com'
              val={registerForm.email}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm, dispatch)
              }
              isRequired={true}
              className={['txtinput']}
              name='email'
            />
          </section>
        </section>
        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='mobnr'>
              {useTranslation('Mobilenumber', lang)}:
            </label>
          </section>
          <section className='registercol'>
            <Input
              type='text'
              id='mobnr'
              val={registerForm.mobnr}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm, dispatch)
              }
              className={['txtinput']}
              name='mobnr'
              autoComplete='tel-local'
              placeHolder='07X-XXXXXXX'
            />
          </section>
        </section>
        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='psw'>{useTranslation('Password', lang)}: </label>
          </section>
          <section className='registercol'>
            <Input
              type='password'
              id='psw'
              val={registerForm.psw}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm, dispatch)
              }
              isRequired={true}
              className={['txtinput']}
              name='psw'
              autoComplete='new-password'
            />
          </section>
        </section>
        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='repsw'>{useTranslation('repsw', lang)}: </label>
          </section>
          <section className='registercol'>
            <Input
              type='password'
              id='repsw'
              val={registerForm.repsw}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm, dispatch)
              }
              isRequired={true}
              className={['txtinput']}
              name='repsw'
              autoComplete='new-password'
            />
          </section>
        </section>
        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='img'>
              {useTranslation('Profilephoto', lang)}:{' '}
            </label>
          </section>
          <section className='registercol'>
            <FileUploader
              type='file'
              id='register_avatar'
              val={registerForm.avatar}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) =>
                RegisterTyper(e, registerForm, dispatch)
              }
              acceptValues='image/*'
              isRequired={true}
              name='avatar'
            />
          </section>
        </section>
        <Btn
          disabled={loading}
          className={['btn']}
          clickFunc={() => RegisterUser(dispatch, registerForm, navigate)}
        >
          {useTranslation('Register', lang)}
        </Btn>
      </section>
    </form>
  );
};

export default RegisterForm;
