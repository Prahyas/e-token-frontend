import React from 'react';
import { NavLink } from 'react-router-dom';
import authbg from '../../Assets/authbg.svg';
const Login = () => {
  return (
    <>
      <div className='bg-gray-100 flex justify-center items-center h-screen p-3'>
        <form className='w-full sm:w-2/5 bg-white p-6 rounded-md shadow-xl'>
          <div className='mb-6'>
            <p class='text-2xl dark:text-white'>Login</p>
          </div>
          <div className='mb-6'>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='name@emmail.com'
              required=''
            />
          </div>
          <div className='mb-6'>
            <label
              for='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your password
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required=''
            />
          </div>
          <div className='flex items-start mb-6'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                aria-describedby='remember'
                type='checkbox'
                className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                required=''
              />
            </div>
            <div className='ml-3 text-sm'>
              <label
                for='remember'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                Remember me
              </label>
            </div>
          </div>
          <div className='flex md:flex-col items-center '></div>
          <NavLink
            to='/admin/dashboard'
            type='submit'
            className='bg-crimson mr-3 mb-2 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Login
          </NavLink>
          <NavLink
            to='/auth/register'
            className='text-crimson text-sm underline '
          >
            Create an account?
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
