import React from 'react';
import Home from './home/Home';
import { Routes, Route, Navigate } from 'react-router-dom'
import Courses from './course/Courses';
import Singup from './components/Singup';
import Contacts from './Contact/Contacts';
import Abouts from './about/Abouts';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser ? <Courses /> : <Navigate to='/singup' />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/about' element={<Abouts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
