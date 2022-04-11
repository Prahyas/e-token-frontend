import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';

const AddTokenModal = ({ open, setopen, addTokens }) => {
  const initialFormState = {
    service: null,
    totaltokens: null,
    singletoken: 0,
  };
  const [newTokenData, setnewTokenData] = useState(initialFormState);
  const { servicesData } = useContext(DataContext);
  const [services, setServices] = servicesData;

  return (
    <>
      <div class=' bg-rgba overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 flex justify-center items-center h-full '>
        <div class='relative px-4 w-full max-w-2xl h-full md:h-auto pt-5'>
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div class='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
              <h3 class='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                Add a new Token
              </h3>
              <button
                type='button'
                class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => setopen(false)}
              >
                <svg
                  class='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>

            <div class='p-6 space-y-6'>
              <form>
                {newTokenData.service === null && (
                  <div
                    class='flex p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
                    role='alert'
                  >
                    <svg
                      class='inline flex-shrink-0 mr-3 w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <div>
                      <span class='font-medium'>Incomplete!</span> You must
                      select a service
                    </div>
                  </div>
                )}
                <div class='mb-2'>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Select Service
                  </label>
                  <select
                    onChange={(e) =>
                      setnewTokenData({
                        ...newTokenData,
                        service: e.target.value,
                      })
                    }
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  >
                    <option value='' selected disabled>
                      Select one...
                    </option>
                    {services.map((service) => (
                      <option value={service.id}>
                        {service.attributes.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div class='mb-2'>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Tokens for today
                  </label>
                  <input
                    type='text'
                    value={newTokenData.totaltokens}
                    onChange={(e) =>
                      setnewTokenData({
                        ...newTokenData,
                        totaltokens: e.target.value,
                      })
                    }
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Service Name'
                    required
                  />
                </div>
              </form>
            </div>

            <div class='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
              <button
                onClick={() => {
                  setopen(false), addTokens(newTokenData);
                }}
                type='button'
                class='text-white disabled:opacity-75 disabled:cursor-not-allowed bg-crimson font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                disabled={!newTokenData.service || !newTokenData.totaltokens}
              >
                Add
              </button>
              <button
                onClick={() => setopen(false)}
                type='button'
                class='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTokenModal;
