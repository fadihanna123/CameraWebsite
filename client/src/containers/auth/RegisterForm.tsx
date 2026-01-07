import { FC, RefObject, useRef } from 'react';

// Components
import useTranslation from '@hooks/useTranslate';
import Btn from '@ui/Btn';
import FileUploader from '@ui/FileUploader';
import Input from '@ui/Input';
import useReduxConsts from '@hooks/useReduxConsts';
import { doRegister } from '@core/functions/doRegister';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/**
 * @author Fadi Hanna
 */

const RegisterForm: FC = () => {
  const { lang, loading, dispatch } = useReduxConsts();
  const { register, handleSubmit } = useForm<IRegisterForm>();
  const navigate: NavigateFunction = useNavigate();
  const registerFormRef: RefObject<HTMLFormElement | null> = useRef(null);

  return (
    <form
      onSubmit={handleSubmit((registerForm: IRegisterForm) => {
        doRegister(dispatch, registerForm, navigate, registerFormRef);
      })}
      encType='multipart/form-data'
      method='post'
      ref={registerFormRef}
    >
      <section className='registerbox'>
        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='register_fullname'>
              {useTranslation('Full_Name', lang)}:{' '}
            </label>
          </section>
          <section className='registercol'>
            <Input
              id='register_fullname'
              name='fullname'
              isRequired={true}
              className={['txtinput']}
              register={register}
            />
          </section>
        </section>

        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='register_uname'>
              {useTranslation('Username', lang)}:{' '}
            </label>
          </section>
          <section className='registercol'>
            <Input
              id='register_uname'
              name='uname'
              isRequired={true}
              className={['txtinput']}
              register={register}
            />
          </section>
        </section>

        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='register_email'>
              {useTranslation('Email', lang)}:{' '}
            </label>
          </section>
          <section className='registercol'>
            <Input
              type='email'
              id='register_email'
              placeHolder='user@gmail.com'
              isRequired={true}
              className={['txtinput']}
              name='email'
              register={register}
            />
          </section>
        </section>

        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='register_mobnr'>
              {useTranslation('Mobilenumber', lang)}:
            </label>
          </section>
          <section className='registercol'>
            <Input
              id='register_mobnr'
              className={['txtinput']}
              name='mobnr'
              autoComplete='tel-local'
              placeHolder='07X-XXXXXXX'
              register={register}
            />
          </section>
        </section>

        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='register_psw'>
              {useTranslation('Password', lang)}:{' '}
            </label>
          </section>
          <section className='registercol'>
            <Input
              type='password'
              id='register_psw'
              isRequired={true}
              className={['txtinput']}
              name='psw'
              autoComplete='new-password'
              register={register}
            />
          </section>
        </section>

        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='register_repsw'>
              {useTranslation('repsw', lang)}:{' '}
            </label>
          </section>
          <section className='registercol'>
            <Input
              type='password'
              id='register_repsw'
              isRequired={true}
              className={['txtinput']}
              name='repsw'
              autoComplete='new-password'
              register={register}
            />
          </section>
        </section>

        <section className='registerrow'>
          <section className='registercol'>
            <label htmlFor='register_avatar'>
              {useTranslation('Profilephoto', lang)}:{' '}
            </label>
          </section>
          <section className='registercol'>
            <FileUploader
              type='file'
              id='register_avatar'
              acceptValues='image/*'
              name='avatar'
              register={register}
            />
          </section>
        </section>

        <Btn disabled={loading} className={['btn']}>
          {useTranslation('Register', lang)}
        </Btn>
      </section>
    </form>
  );
};

export default RegisterForm;
