import { Route, Routes } from 'react-router-dom';
import React from 'react';

import About from '@core/containers/About';
import Register from '@core/containers/auth/Register';
import Contact from '@core/containers/Contact';
import Start from '@core/containers/Start';
import { Header, Footer } from '@core/inc';
import Error from '@core/containers/Error';
import { Profile } from '@core/containers/dashboard';

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
