import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../ContextAPI/data';

const Deviceinfos = () => {
  const { deviceinfosData } = useContext(DataContext);
  const [deviceinfos, setDeviceinfos] = deviceinfosData;

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>Devices</p>
      </div>
      <hr className='mb-5' />

      <div class='overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='px-6 py-3'>
                ID
              </th>
              <th scope='col' class='px-6 py-3'>
                Device ID
              </th>
              <th scope='col' class='px-6 py-3'>
                User Token
              </th>
              <th scope='col' class='px-6 py-3'>
                FCM Token
              </th>
              <th scope='col' class='px-6 py-3'>
                Service
              </th>
            </tr>
          </thead>
          <tbody>
            {deviceinfos.map((deviceinfo) => {
              return (
                <>
                  <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                    <th
                      scope='row'
                      class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                    >
                      {deviceinfo.id}
                    </th>

                    <td class='px-6 py-4'>{deviceinfo.attributes.deviceid} </td>
                    <td class='px-6 py-4'>{deviceinfo.attributes.usertoken}</td>
                    <td class='px-6 py-4'>{deviceinfo.attributes.fcmtoken}</td>
                    <td class='px-6 py-4'>
                      {deviceinfo.attributes.service.data.attributes.name}{' '}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Deviceinfos;
