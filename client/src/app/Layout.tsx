import About from 'containers/About';
import Register from 'containers/auth/Register';
import Contact from 'containers/Contact';
import Profile from 'containers/dashboard/Profile';
import Start from 'containers/Start';
import Footer from 'inc/Footer';
import Header from 'inc/Header';
import { Route, Routes } from 'react-router-dom';

import Error from '../containers/Error';

const Layout: React.FC = () => (
  <section className='container'>
    <Header />
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Dashboard' element={<Profile />} />
      <Route element={<Error />} />
    </Routes>
    <Footer />
  </section>
);

export default Layout;
