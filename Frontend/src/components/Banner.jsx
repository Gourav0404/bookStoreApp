import React from 'react';
import banner from '../../public/bannerImage.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 flex md:flex-row flex-col my-12'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-14 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='font-bold text-4xl'>Hello , Welcome here to learn something <span className='text-pink-500'>new everyday !!!</span></h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates atque officia dolore maiores, odio suscipit at, itaque quam consequuntur natus eius earum eum provident, quos possimus fugit tenetur eaque molestias!</p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Enter Your Email to Login" />
            </label>
          </div>
          <Link to='/contact'>
            <button className="mt-6 btn btn-secondary">Contact</button>
          </Link>
        </div>
        <div className='w-full dark:bg-slate-900 order-1 md:w-1/2'>
          <img src={banner} className=' md:w-76 md:h-76 rounded-full mt-4 bg-white dark:bg-slate-900' alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
