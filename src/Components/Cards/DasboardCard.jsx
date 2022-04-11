import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../ContextAPI/data';

const DashboardCard = ({
  serviceId,
  tokenId,
  name,
  totaltokens,
  singletoken,
}) => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { fetchServicesFunction } = useContext(DataContext);
  const { fetchServices } = fetchServicesFunction;
  const { deviceinfosData } = useContext(DataContext);
  const [deviceinfos, setDeviceinfos] = deviceinfosData;

  useEffect(() => {
    console.log('singletoken', singletoken);
    console.log('totaltoken', totaltokens);
    console.log('serviceId', serviceId);
  }, [deviceinfos, serviceId]);

  const updateCurrentToken = async (
    updatedCurrentTokenId,
    editedCurrentTokenData
  ) => {
    // console.log('id, data', updatedCurrentTokenId, editedCurrentTokenData);
    try {
      const response = await axios.put(
        `${api}/api/tokens/${updatedCurrentTokenId}`,
        {
          data: {
            singletoken: editedCurrentTokenData,
          },
        }
      );
      fetchServices();
    } catch (error) {
      console.log(error);
    }
  };

  const sendNotificationToDevice = async (newsingletoken) => {
    try {
      const deviceDetails = deviceinfos.filter((a) => {
        return (
          serviceId === a.attributes.service.data.id &&
          newsingletoken === a.attributes.usertoken
        );
      });
      await axios.post(
        'https://fcm.googleapis.com/fcm/send',
        {
          to: `${deviceDetails[0].attributes.fcmtoken}`,
          priority: 'high',
          content_available: true,
          notification: {
            body: 'hajurko paalo aaouna laaagyo haii ',
            title: ' 5 min paxi aaouxa?',
            sound: 'default',
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'key=AAAAVigk7U0:APA91bEUGSX0JHTkglKudNs7PSCmSFajOD_tlMDbVIanixWXYGc0xq-v1pGQNNcJzU1g33aXZphqO4PtrzymchtPfqEmsCmiSzmuQ10-AQ090VEuDW-o-t053EU3quMY1YaSNYNhfN8V',
          },
        }
      );
      console.log('devicedetails', deviceDetails[0].attributes.fcmtoken);
    } catch (error) {
      console.log(error);
    }
  };

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
          onClick={() => {
            updateCurrentToken(tokenId, singletoken + 1);
            sendNotificationToDevice(singletoken + 1);
          }}
          className='disabled:opacity-75 disabled:cursor-not-allowed mt-5 py-2 px-3 text-xs font-medium text-center text-white bg-crimson rounded-lg w-full'
          disabled={
            singletoken >= totaltokens ||
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
