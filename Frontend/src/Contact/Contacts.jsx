import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Contact className='min-h-screen dark:bg-slate-900 dark:text-white' />
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
