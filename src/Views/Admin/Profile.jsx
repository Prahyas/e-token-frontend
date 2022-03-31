import React from 'react';
import nepalsarkarlogo from '../../Assets/nepalsarkarlogo.png';
const Profile = () => {
  return (
    <>
      {' '}
      <div className='mb-2'>
        <p class='text-2xl dark:text-white'>Profile</p>
      </div>
      <hr className='mb-5' />
      <div className='flex justify-center h-[40vh] bg-white rounded-2xl mt-14 lg:mt-18'>
        <div className='bg-white h-28 w-28 -mt-10 border-2 border-gray-200  rounded-full p-5'>
          <img
            src={nepalsarkarlogo}
            className='h-[95%] w-full'
            alt='user photo'
          />
        </div>
        <div>
          <p class='text-2xl dark:text-white'>MOHP</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
