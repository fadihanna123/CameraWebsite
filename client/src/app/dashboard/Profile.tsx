import React from 'react';

// Components
import useTitle from '@hooks/useTitle';
import useReduxConsts from '@hooks/useReduxConsts';
import useTranslate from '@core/hooks/useTranslate';
import { getStorage } from '@core/functions';
import { sessionStorageKeys } from '@core/utils';
import Heading from '@core/ui/Heading';
import Img from '@core/ui/Img';
import DefaultProfilePhoto from '@assets/defaultProfilePhoto.jpg';
/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Profile: React.FC = () => {
  const { login, lang } = useReduxConsts();
  const getUserData: User = JSON.parse(
    getStorage(sessionStorageKeys.User || '{}')!
  );
  const email = useTranslate('Email', lang);
  const mobileNumber = useTranslate('Mobile_Number', lang);
  const loginRequireText = useTranslate('Login_Require_Text', lang);

  useTitle('Surveillance systems Inc - Profil');

  return (
    <main className='main'>
      {login ? (
        <div className='profileContainer'>
          <div className='profileLeft'>
            <Heading>{getUserData.fullname}</Heading>
            <Img
              source={
                getUserData.avatar ? getUserData.avatar : DefaultProfilePhoto
              }
              alt='user-avatar'
              dimensions={[200, 200]}
            />
            <br />
            <b>Username:</b> {getUserData.uname} <br />
            <b>{email}:</b> {getUserData.email} <br />
            <b>{mobileNumber}:</b> {getUserData.mobnr} <br />
          </div>

          <div className='profileRight'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              velit. Nostrum, sint modi? Sint, consequatur. Voluptate aspernatur
              eius autem quo blanditiis neque ipsa tempora voluptates quidem
              nostrum! Magni obcaecati ad rerum expedita at, earum nihil
              quisquam nostrum enim molestias voluptate eos consequatur vitae
              iusto corporis? Ea dolores veritatis inventore suscipit quae,
              fugiat accusantium sed blanditiis culpa earum aliquid natus
              explicabo similique delectus nam eum? Temporibus optio consectetur
              obcaecati nesciunt ratione ex natus sequi. Facilis, eius illo
              consequatur asperiores ea totam praesentium optio, ad quisquam
              excepturi vel? Porro consequatur in dignissimos quod iste
              provident rem fugit eveniet! Labore suscipit quaerat enim.
            </p>
          </div>
        </div>
      ) : (
        loginRequireText
      )}
    </main>
  );
};

export default Profile;
