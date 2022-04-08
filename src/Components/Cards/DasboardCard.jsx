import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../ContextAPI/data';

const DashboardCard = ({ id, name, totaltokens, singletoken, deviceinfos }) => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;

  const updateCurrentToken = async (
    updatedCurrentTokenId,
    editedCurrentTokenData
  ) => {
    console.log('id, data', updatedCurrentTokenId, editedCurrentTokenData);
    try {
      const response = await axios.put(
        `${api}/api/tokens/${updatedCurrentTokenId}`,
        {
          data: {
            singletoken: editedCurrentTokenData,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('deviceinfos', deviceinfos);
  }, [deviceinfos]);

  return (
    <>
      <div className='block mr-3 my-3 p-6 grow bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {/* Service name */}
          {name}
        </h5>
        <div className='flex flex-col'>
          <div className='flex justify-between font-normal text-gray-700 dark:text-gray-400'>
            {/* Total assigned tokens:  {totaltokens} */}
            <p>Total assigned tokens:</p>
            <p className='font-bold text-xl'>{totaltokens}</p>
          </div>
          <div className='flex justify-between items-centerKs font-normal text-gray-700 dark:text-gray-400'>
            {/* Current running tokens: {singletoken} */}
            <p>Current running token:</p>
            <p className='font-bold text-xl'>{singletoken}</p>
          </div>
        </div>
        <button
          type='button'
          onClick={() => updateCurrentToken(id, singletoken + 1)}
          className='disabled:opacity-75 disabled:cursor-not-allowed mt-5 py-2 px-3 text-xs font-medium text-center text-white bg-crimson rounded-lg w-full'
          disabled={
            singletoken === totaltokens ||
            totaltokens === 'Not set' ||
            singletoken === 'Not set'
          }
        >
          Next Token
        </button>
      </div>
    </>
  );
};

export default DashboardCard;
