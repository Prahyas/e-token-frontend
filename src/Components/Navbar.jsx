import React from 'react';

const Navbar = ({ showNav, setshowNav }) => {
  return (
    <>
      <nav className='flex justify-between px-5 items-center fixed lg:ml-[20%] h-[10%] border-b-2 bg-gray-200 shadow w-[100%] lg:w-[80%]'>
        <div>
          <p className='hidden lg:block text-base dark:text-white'>
            Ministry of Health & Population
          </p>
          <button onClick={() => setshowNav(!showNav)} className='lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </button>
        </div>
        <div className='flex justify-center items-center space-x-3 '>
          <button
            id='dropdownDividerButton'
            data-dropdown-toggle='dropdownDivider'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-crimson'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
          </button>
          <button
            type='button'
            className='py-2 px-3 text-xs font-medium text-center text-crimson border border-crimson rounded-lg'
          >
            Nep
          </button>
        </div>
        <div
          id='dropdownDivider'
          className='hidden z-10 w-[20%] text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
          <ul className='py-1' aria-labelledby='dropdownDividerButton'>
            <li>
              <a
                href='#'
                className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                Notification 1
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                Notification 2
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                Notification 3
              </a>
            </li>
          </ul>
          <div className='py-1'>
            <a
              href='#'
              className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
            >
              Mark as read
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
