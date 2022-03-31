import React, { useState, useEffect } from 'react';
import EditDepartmentModal from '../Modals/DepartmentModals/EditDepartmentModal';

const DepartmentCard = ({
  id,
  attributes,
  deleteDepartments,
  updateDepartments,
}) => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className='w-full my-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-5'>
          <div className='flex justify-between'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {/* Department name */}
              {attributes.name}
            </h5>
            <div className='flex space-x-2'>
              <button
                onClick={() => {
                  setopen(true);
                }}
                className='rounded-lg inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-crimson'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
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
                onClick={() => deleteDepartments(id)}
                className='rounded-lg inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-crimson'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
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
              <EditDepartmentModal
                open={open}
                setopen={setopen}
                id={id}
                attributes={attributes}
                updateDepartments={updateDepartments}
              />
            ) : null}
          </div>
          <hr className='my-3' />

          <div className='flex items-center mb-3'>
            <p class='text-sm mr-5 dark:text-white'>Description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentCard;
