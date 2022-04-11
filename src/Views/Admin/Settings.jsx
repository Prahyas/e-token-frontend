import React, { useState } from 'react';

const Settings = ({ showNav, setshowNav }) => {
  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>Settings </p>
      </div>
      <hr className='mb-5' />
      <div className='m-4 mb-8'>
        <div className='mb-2'>
          <p className='text-md dark:text-white'>Account Settings </p>
        </div>
        <hr className='mb-5' />
        <form>
          {/* <div class='mb-6'>
          <label
            for='countries'
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            शाखा छान्नुहोस्
          </label>
          <select
            id='countries'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
          >
            <option> कृषि शाखा</option>
            <option> स्वस्थ शाखा</option>
            <option> शिक्षा शाखा</option>
          </select>
        </div> */}
          {/* <div class='mb-6'>
            <label
              for='password'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Username
            </label>
            <input
              type='password'
              id='password'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              required
            />
          </div> */}
          <div className='flex flex-wrap md:flex-row flex-col'>
            <div class='mb-6 md:mr-6 grow'>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Username
              </label>
              <input
                type='email'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='mb-6 md:mr-6 grow'>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Email
              </label>
              <input
                type='password'
                id='password'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                required
              />
            </div>
          </div>
          <div className='flex flex-wrap md:flex-row flex-col'>
            <div class='mb-6 md:mr-6 grow'>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Password
              </label>
              <input
                type='email'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='mb-6 md:mr-6 grow'>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Confirmed
              </label>
              <input
                type='password'
                id='password'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                required
              />
            </div>
          </div>

          <button
            type='submit'
            class='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          >
            Save
          </button>
        </form>
      </div>
      <div className='m-4 mb-8'>
        <div className='mb-2'>
          <p className='text-md dark:text-white'>Profile Settings </p>
        </div>
        <hr className='mb-5' />
        <form>
          {/* <div class='mb-6'>
          <label
            for='countries'
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            शाखा छान्नुहोस्
          </label>
          <select
            id='countries'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
          >
            <option> कृषि शाखा</option>
            <option> स्वस्थ शाखा</option>
            <option> शिक्षा शाखा</option>
          </select>
        </div> */}
          {/* <div class='mb-6'>
            <label
              for='password'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Username
            </label>
            <input
              type='password'
              id='password'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              required
            />
          </div> */}
          <div className='flex flex-wrap md:flex-row flex-col'>
            <div class='mb-6 md:mr-6 grow'>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Office name
              </label>
              <input
                type='email'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='mb-6 md:mr-6 grow'>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Address
              </label>
              <input
                type='password'
                id='password'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                required
              />
            </div>
          </div>
          <div className='flex flex-wrap md:flex-row flex-col'>
            <div class='mb-6 md:mr-6 grow'>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Contact
              </label>
              <input
                type='email'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='mb-6 md:mr-6 grow'>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Email
              </label>
              <input
                type='password'
                id='password'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                required
              />
            </div>
          </div>

          <button
            type='submit'
            class='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;
