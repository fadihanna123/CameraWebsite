import About from 'containers/About';
import Register from 'containers/auth/Register';
import Contact from 'containers/Contact';
import Start from 'containers/Start';
import Footer from 'inc/Footer';
import { Header } from 'inc';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Error from '../containers/Error';
import { Profile } from 'containers/dashboard';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const Layout: React.FC = () => (
  <section className='container'>
    <Header />
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Profile' element={<Profile />} />
      <Route element={<Error />} />
      <Route path='*' element={<Start />} />
    </Routes>
    <Footer />
  </section>
);

export default Layout;
