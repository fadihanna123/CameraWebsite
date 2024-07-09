import { Route, Routes } from 'react-router-dom';
import React from 'react';

import About from './About';
import Register from './auth/Register';
import Contact from './Contact';
import Start from './Start';
import { Header, Footer } from '../inc';
import Error from './Error';
import { Profile } from './dashboard';

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
