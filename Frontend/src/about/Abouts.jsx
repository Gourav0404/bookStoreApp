import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

const Abouts = () => {
  return (
    <div>
      <Navbar/>
       <div>
        <About className='min-h-screen dark:bg-slate-900 dark:text-white' />
      </div>
      <Footer />
    </div>
  );
}

export default Abouts;
