import { Route, Routes } from 'react-router-dom';
import React from 'react';

import About from './About';
import Register from './auth/Register';
import Contact from './Contact';
import Start from './Start';
import Header from '@inc/Header';
import Footer from '@inc/Footer';

import Error from './ErrorPage';
import Profile from './dashboard/Profile';
import { Flip, ToastContainer } from 'react-toastify';

/**
 * @author Fadi Hanna
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
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    <ToastContainer transition={Flip} hideProgressBar={true} />
  </section>
);

export default Layout;
