import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [api, setapi] = useState('https://e-token-backend.herokuapp.com');
  const [departments, setDepartments] = useState([]);
  const [services, setServices] = useState([]);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const getLocal = () => {
      if (localStorage.getItem('departments') === null) {
        localStorage.setItem('departments', JSON.stringify([]));
      } else {
        let localDb = JSON.parse(localStorage.getItem('departments'));
        setDepartments(localDb);
      }
      if (localStorage.getItem('services') === null) {
        localStorage.setItem('services', JSON.stringify([]));
      } else {
        let localDb = JSON.parse(localStorage.getItem('services'));
        setServices(localDb);
      }
      if (localStorage.getItem('tokens') === null) {
        localStorage.setItem('tokens', JSON.stringify([]));
      } else {
        let localDb = JSON.parse(localStorage.getItem('tokens'));
        setTokens(localDb);
      }
    };
    getLocal();
  }, []);

  useEffect(() => {
    const saveLocal = () => {
      localStorage.setItem('departments', JSON.stringify(departments));
      localStorage.setItem('services', JSON.stringify(services));
      localStorage.setItem('tokens', JSON.stringify(tokens));
    };
    saveLocal();
  }, [departments, services, tokens]);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${api}/api/departments?populate=*`);

      setDepartments(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${api}/api/services?populate=*`);

      setServices(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchTokens = async () => {
    try {
      const response = await axios.get(`${api}/api/tokens?populate[0]=service`);

      setTokens(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchDepartments();
    fetchServices();
    fetchTokens();
  }, []);

  return (
    <DataContext.Provider
      value={{
        apiData: [api, setapi],
        departmentsData: [departments, setDepartments],
        fetchDepartmentsFunction: { fetchDepartments },
        servicesData: [services, setServices],
        fetchServicesFunction: { fetchServices },
        tokensData: [tokens, setTokens],
        fetchTokensFunction: { fetchTokens },
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
