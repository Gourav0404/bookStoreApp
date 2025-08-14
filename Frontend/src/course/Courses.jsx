import React from 'react';
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footer from '../components/Footer';

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
        <Course />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
