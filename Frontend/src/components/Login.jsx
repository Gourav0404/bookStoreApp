import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-slate-900"
              onClick={() => document.getElementById('my_modal_3').close()}
            >✕</Link>

            <h3 className="font-bold text-lg dark:text-slate-900">Login</h3>
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
                  <button className="px-3 py-1 bg-pink-500 rounded-full text-white rounded hover:bg-pink-700 text-white">Login</button>
                  <p className='dark:text-slate-900 dark:text-white'>Not rigistered ? <Link to='/singup' className='text-blue-400 cursor-pointer underline'>singup</Link></p>
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
