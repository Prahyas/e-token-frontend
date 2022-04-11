import axios from 'axios';
import React, { useState, useContext } from 'react';
import ServiceCard from '../../Components/Cards/ServiceCard';
import AddServiceModal from '../../Components/Modals/ServiceModals/AddServiceModal';
import { DataContext } from '../../ContextAPI/data';

const Services = () => {
  const [open, setopen] = useState(false);
  const [state, setstate] = useState(0);
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { servicesData } = useContext(DataContext);
  const [services, setServices] = servicesData;
  const { fetchServicesFunction } = useContext(DataContext);
  const { fetchServices } = fetchServicesFunction;

  const addServices = async (newServiceData) => {
    await axios
      .post(`${api}/api/services`, {
        data: newServiceData,
      })
      .then((response) => {
        console.log('response', response);
        setopen(false);
        // setDepartments([...departments, response.data.data]);
        fetchServices();
      });
  };

  const updateServices = async (updatedServiceId, editedServiceData) => {
    console.log('id, data', updatedServiceId, editedServiceData);
    await axios
      .put(`${api}/api/services/${updatedServiceId}`, {
        data: editedServiceData,
      })
      .then((response) => {
        setopen(false);
        // setDepartments([response.data.data]);
        fetchServices();
      });
  };

  const deleteServices = async (deleteServiceId) => {
    await axios.delete(`${api}/api/services/${deleteServiceId}`);
    fetchServices();
  };

  return (
    <>
      <div className='flex justify-between mb-2'>
        <p className='text-2xl dark:text-white'>Services</p>
        {/* <div className='hidden h-10 lg:flex'>
          <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </span>
          <input
            type='text'
            id='website-admin'
            className='rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search'
          />
        </div> */}
        <button
          onClick={() => setopen(true)}
          type='button'
          className='py-2 px-3 text-xs font-medium text-center text-white bg-crimson rounded-lg'
        >
          Add Service
        </button>
        {open ? (
          <AddServiceModal
            open={open}
            setopen={setopen}
            addServices={addServices}
          />
        ) : null}
      </div>
      <hr className='mb-5' />
      {services.length === 0 ? (
        <div>
          <div
            class='flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
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
              <span class='font-medium'>NO Data!</span> Services has not been
              added yet.
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-wrap justify-between'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              attributes={service.attributes}
              deleteServices={deleteServices}
              updateServices={updateServices}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Services;
