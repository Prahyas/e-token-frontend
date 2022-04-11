import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../ContextAPI/data';
import EditServiceModal from '../Modals/ServiceModals/EditServiceModal';
import AddTokenModal from '../Modals/TokenModal/AddTokenModal';
import EditTokenModal from '../Modals/TokenModal/EditTokenModal';

const TokenCard = ({
  id,
  attributes,
  totaltokens,
  deleteTokens,
  updateTokens,
}) => {
  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { tokensData } = useContext(DataContext);
  const [tokens, setTokens] = tokensData;
  const { fetchTokensFunction } = useContext(DataContext);
  const { fetchTokens } = fetchTokensFunction;

  const addTokens = async (newTokenData) => {
    await axios
      .post(`${api}/api/tokens`, {
        data: newTokenData,
      })
      .then((response) => {
        console.log('response', response);
        setopen(false);
        fetchTokens();
      });
  };

  useEffect(() => {
    console.log('token', attributes.service.data.attributes.name);
  }, [attributes]);

  // const updateTokens = async (updatedServiceId, editedServiceData) => {
  //   console.log('id, data', updatedServiceId, editedServiceData);
  //   await axios
  //     .put(`${api}/api/services/${updatedServiceId}`, {
  //       data: editedServiceData,
  //     })
  //     .then((response) => {
  //       setopen(false);
  //       // setDepartments([response.data.data]);
  //       fetchServices();
  //     });
  // };

  return (
    <>
      <div className='block mr-3 my-3 grow bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <div className='p-4'>
          <div className='flex justify-between items-center'>
            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {/* Service Name */}
              Total tokens {''}
              {attributes.service.data.attributes.name}
            </h5>
            <div className='flex space-x-2'>
              <button
                onClick={() => setopen(true)}
                className='rounded-lg inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-crimson'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                  <path
                    fill-rule='evenodd'
                    d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>
              <button
                onClick={() => deleteTokens(id)}
                className='rounded-lg inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-crimson'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </button>
            </div>
            {open ? (
              <EditTokenModal
                open={open}
                setopen={setopen}
                id={id}
                attributes={attributes}
                updateTokens={updateTokens}
              />
            ) : null}
          </div>

          <hr className='my-3' />
          <div className='flex items-center mb-2'>
            <p class='text-sm mr-5 dark:text-white'>
              Total tokens assigned for today :{' '}
            </p>
            <p className='font-bold text-xl'>{totaltokens}</p>
          </div>

          {open2 ? (
            <AddTokenModal
              open2={open2}
              setopen2={setopen2}
              addTokens={addTokens}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TokenCard;
