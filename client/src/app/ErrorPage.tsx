import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import useTitle from '@hooks/useTitle';
import Heading from '@ui/Heading';
import Para from '@ui/Para';
import useTranslate from '@core/hooks/useTranslate';
import useReduxConsts from '@core/hooks/useReduxConsts';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const ErrorPage: FC = () => {
  const { lang } = useReduxConsts();
  useTitle('Surveillance systems Inc - Sidan finns inte');

  return (
    <main className='main'>
      <Heading className={['errorheading']}>404 NOT FOUND</Heading>
      <Para className={['errorpara']}>
        {useTranslate('NotFound_Text', lang)}.
      </Para>
      <Link to='/' className='errorLink'>
        <i className='fa-solid fa-house'></i> {useTranslate('Start', lang)}
      </Link>
    </main>
  );
};

export default ErrorPage;
