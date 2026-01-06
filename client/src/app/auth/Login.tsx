import { FC, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Components
import useTranslation from '@hooks/useTranslate';
import Btn from '@ui/Btn';
import Heading from '@ui/Heading';
import Input from '@ui/Input';
import LogOutBox from '@containers/auth/LogOutBox';
import useReduxConsts from '@hooks/useReduxConsts';
import { checkLogin } from '@functions/checkLogin';

/**
 * @author Fadi Hanna
 */

const Login: FC = () => {
  const { lang, login, loading, dispatch } = useReduxConsts();
  const { register, handleSubmit } = useForm<ILoginForm>();
  const [viewPsw, setViewPsw] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      {!login ? (
        <form
          onSubmit={handleSubmit((loginForm: ILoginForm) => {
            checkLogin(dispatch, navigate, loginForm);
          })}
        >
          <section className='loginsection'>
            <Heading className={['loginheading']}>
              {useTranslation('Login', lang)}
            </Heading>
            <section className='loginrow'>
              <section className='logincol'>
                <label htmlFor='login_uname' className='loginLabel'>
                  {useTranslation('Username', lang)}:
                </label>
              </section>
              <section className='logincol'>
                <Input
                  name={'uname'}
                  id='login_uname'
                  className={['txtinput']}
                  register={register}
                  isRequired
                  onKeyDown={(e: KeyboardEvent) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();

                      checkLogin(dispatch, navigate, {
                        uname: (e.target as HTMLInputElement).value,
                        psw: (e.target as HTMLInputElement).value,
                      });
                    }
                  }}
                />
              </section>
            </section>

            <div className='loginrow'>
              <div className='logincol'>
                <label htmlFor='login_psw' className='loginLabel'>
                  {useTranslation('Password', lang)}:
                </label>
              </div>
              <div className='logincol'>
                <div className='pswFieldContainer'>
                  <Input
                    name={'psw'}
                    id='login_psw'
                    type={viewPsw ? 'text' : 'password'}
                    className={['txtinput']}
                    isRequired
                    autoComplete='on'
                    register={register}
                    maxLength={12}
                    onKeyDown={(e: KeyboardEvent) => {
                      if (e.ctrlKey && e.key === 'k') {
                        setViewPsw(!viewPsw);
                      }

                      if (e.key === 'Enter') {
                        e.preventDefault();
                        checkLogin(dispatch, navigate, {
                          uname: (e.target as HTMLInputElement).value,
                          psw: (e.target as HTMLInputElement).value,
                        });
                      }
                    }}
                  />

                  <span onClick={() => setViewPsw(!viewPsw)}>
                    {viewPsw ? (
                      <i className='fa-solid fa-eye-slash'></i>
                    ) : (
                      <i className='fa-solid fa-eye'></i>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <Btn className={['btn']} disabled={loading}>
              {useTranslation('Login', lang)}
            </Btn>
          </section>
        </form>
      ) : (
        <LogOutBox />
      )}
    </>
  );
};

export default Login;
