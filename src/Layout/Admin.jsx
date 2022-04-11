import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Views/Admin/Dashboard';
import Department from '../Views/Admin/Department';
import Deviceinfos from '../Views/Admin/DeviceInfo';
import Profile from '../Views/Admin/Profile';
import Services from '../Views/Admin/Services';
import Settings from '../Views/Admin/Settings';
import Tokens from '../Views/Admin/Tokens';

const Admin = () => {
  const [showNav, setshowNav] = useState(false);

  return (
    <>
      <Sidebar showNav={showNav} setshowNav={setshowNav} />

      <Navbar showNav={showNav} setshowNav={setshowNav} />

      <div className='bg-gray-100 lg:ml-[20%] w-[100%] lg:w-[80%] min-h-screen p-6'>
        <div className='mt-14'>
          <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='department' element={<Department />} />
            <Route path='services' element={<Services />} />
            <Route path='tokens' element={<Tokens />} />
            <Route path='devices' element={<Deviceinfos />} />
            <Route path='settings' element={<Settings />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
