import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import DashboardCard from '../../Components/Cards/DasboardCard';
import { DataContext } from '../../ContextAPI/data';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  let navigate = useNavigate();

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
            />
          )
        )}
      </div>
    </>
  );
};

export default Dashboard;
