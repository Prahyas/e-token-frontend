import React from 'react';
import { NavLink } from 'react-router-dom';
import nepalsarkarlogo from '../Assets/nepalsarkarlogo.png';

const Sidebar = ({ showNav, setshowNav }) => {
  return (
    <>
      <div
        className={`${
          showNav ? 'block' : 'hidden'
        }  lg:block w-[100%] lg:w-[20%] h-full fixed overflow-y-auto py-4 px-3 bg-gray-200 dark:bg-gray-800`}
      >
        <div className='hidden lg:flex justify-center mb-5'>
          <img src={nepalsarkarlogo} height={100} width={100} alt='' />
        </div>
        {/* <div className='flex justify-around mb-5'>
          <button
            type='button'
           className='py-2 px-3 text-xs font-medium text-center text-white bg-crimson rounded-lg '
          >
            Profile
          </button>

          <button
            type='button'
           className='py-2 px-3 text-xs font-medium text-center text-white bg-crimson rounded-lg '
          >
            Settings
          </button>
        </div> */}
        <ul className='flex flex-col justify-between h-[90%] lg:h-[80%] space-y-2 mt-10 lg:mt-0'>
          <div>
            <li>
              <NavLink
                onClick={() => setshowNav(!showNav)}
                to='/admin/dashboard'
                className='flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                </svg>
                <span className='ml-3'>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setshowNav(!showNav)}
                to='/admin/department'
                className='flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
                    clip-rule='evenodd'
                  />
                  <path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z' />
                </svg>
                <span className='ml-3'>Department</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setshowNav(!showNav)}
                to='/admin/services'
                className='flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                  <path
                    fillRule='evenodd'
                    d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='ml-3'>Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setshowNav(!showNav)}
                to='/admin/tokens'
                className='flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                  <path
                    fillRule='evenodd'
                    d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='ml-3'>Tokens</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                onClick={() => setshowNav(!showNav)}
                to='/admin/profile'
                className='flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                 className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='ml-3'>Profile</span>
              </NavLink>
            </li>
            <li>
              <a
                onClick={() => setshowNav(!showNav)}
                className='flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                 className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='ml-3'>Settings</span>
              </a>
            </li> */}
          </div>
          <div>
            <li>
              <NavLink
                to='/auth/login'
                type='submit'
                className='flex items-center p-3 bg-crimson mr-3 mb-2 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                  />
                </svg>
                <span className='ml-3'>Logout</span>
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
