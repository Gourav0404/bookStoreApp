// 

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    await axios.post("https://book-store-app-wine-six.vercel.app/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });

        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error : " + err.response.data.message);
        }
      })
  };
  return (
    <div className="flex items-center justify-center h-screen dark:bg-slate-950">
      <div className="relative w-[400px]">
        <div className="modal_box bg-white text-black shadow-xl rounded-xl p-6 border border-gray-200 dark:bg-slate-900">
          {/* Close Button */}
          <div className="absolute right-3 top-3">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost text-gray-600 hover:bg-gray-100"
            >
              ✕
            </Link>
          </div>

          <h3 className="font-bold text-2xl text-gray-800 dark:text-white text-center">
            Signup
          </h3>

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-full max-w-xs mx-auto rounded-lg border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs mx-auto rounded-lg border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered w-full max-w-xs mx-auto rounded-lg border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 transition"
                {...register("password", { required: true })}
              />
              <br></br>
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className="flex justify-around items-center mt-4">
              <button
                type="submit"
                className="px-5 py-2 bg-pink-500 rounded-full text-white hover:bg-pink-600 active:scale-95 transition"
              >
                Signup
              </button>
              <div className='flex gap-1'>
                <p className="text-center text-gray-700 dark:text-white">Have any Account ?</p>
                <button
                  type="button"
                  onClick={() => document.getElementById('my_modal_3').showModal()}
                  className="text-blue-500 underline hover:text-blue-600 active:scale-95 transition"
                >
                  Login
                </button>
              </div>
            </div>
          </form>

          {/* Login Modal */}
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Signup;
