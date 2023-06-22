import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public', 
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json; charset=utf-8'
    },
})

api.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (
        error.request._hasError === true &&
        error.request._response.includes('connect')
      ) {
        alert('Não foi possível conectar aos nossos servidores, sem conexão a internet');
      }
    //   if(error.response.status === 403 ){
    //   }
  
    //   if (error.response.status === 401) {
    //     const requestConfig = error.config
    //     return axios(requestConfig)
    //   }
  
      return Promise.reject(error)
    },
  )

    export default api;