import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    }
    await axios.post("https://book-store-app-wine-six.vercel.app/user/login", userInfo)
      .then((res) => {
        if (res.data) {

          toast.success('Loggedin Successfully');
          document.getElementById('my_modal_3').close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error : " + err.response.data.message);
          setTimeout(() => { }, 3000);
        }
      })
  };
  return (
    <div className='dark:bg-slate-900'>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box text-black dark:bg-slate-900 ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-slate-900"
              onClick={() => document.getElementById('my_modal_3').close()}
            >✕</Link>

            <h3 className="font-bold text-lg dark:text-white">Login</h3>
            <div className='mt-5'>
              <div className="flex flex-col gap-4">
                <div>
                  <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                </div>
                <div>
                  <input type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                </div>
                <div className='flex justify-around items-center mt-4'>
                  <button className="px-3 py-1 bg-pink-500 rounded-full text-white  hover:bg-pink-700 ">Login</button>
                  <p className='dark:text-white '>Not rigistered ? <Link to='/singup' className='text-blue-400 cursor-pointer underline'>singup</Link></p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
