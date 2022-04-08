import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import DashboardCard from '../../Components/Cards/DasboardCard';
import { DataContext } from '../../ContextAPI/data';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  let navigate = useNavigate();

  const { departmentsData } = useContext(DataContext);
  const [departments, setDepartments] = departmentsData;
  const { servicesData } = useContext(DataContext);
  const [services, setServices] = servicesData;
  const { fetchServicesFunction } = useContext(DataContext);
  const { fetchServices } = fetchServicesFunction;

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>Dashboard</p>
      </div>
      <hr className='mb-5' />
      {departments.length === 0 ? (
        <>
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
              <span class='font-medium'>Error!</span> No data found!
            </div>
          </div>
          <ol class='relative border-l border-gray-200 dark:border-gray-700'>
            <li class='mb-10 ml-4'>
              <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                Step 1
              </time>
              <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
                First, add departments
              </h3>
              <p class=' hidden mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <NavLink
                to='/admin/department'
                class=' underline inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
              >
                Go to departments page
              </NavLink>
            </li>
            <li class='mb-10 ml-4'>
              <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                Step 2
              </time>
              <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
                Add Services the department provides
              </h3>
              <p class='hidden text-base font-normal text-gray-500 dark:text-gray-400'>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class='ml-4'>
              <div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                Step
              </time>
              <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
                Assign new tokens
              </h3>
              <p class='hidden text-base font-normal text-gray-500 dark:text-gray-400'>
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </>
      ) : (
        <div className='flex flex-wrap justify-between'>
          {services.map((service) =>
            service.attributes.tokens.data.length === 0 ? (
              <DashboardCard
                key={service.id}
                name={service.attributes.name}
                totaltokens='Not set'
                singletoken='Not set'
              />
            ) : (
              <DashboardCard
                key={service.id}
                name={service.attributes.name}
                id={service.attributes.tokens.data[0].id}
                totaltokens={
                  service.attributes.tokens.data.slice(-1)[0].attributes
                    .totaltokens
                  // service.attributes.tokens.data[0].attributes.totaltokens
                  // service.attributes.tokens.data.slice(-1)[0].attributes.totaltokens
                }
                singletoken={
                  service.attributes.tokens.data.slice(-1)[0].attributes
                    .singletoken
                }
                deviceinfos={service.attributes.deviceinfos}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
