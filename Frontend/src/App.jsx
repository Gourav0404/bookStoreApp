import React from 'react';
import Home from './home/Home';
import { Routes, Route } from 'react-router-dom'
import Courses from './course/Courses';
import Singup from './components/Singup';
import Contacts from './Contact/Contacts';
import Abouts from './about/Abouts';

const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/about' element={<Abouts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
