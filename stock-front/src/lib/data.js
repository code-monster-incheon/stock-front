import axios from 'axios';
// const url = 'http://localhost:8080';
const url = 'https://themaju.herokuapp.com';

export const getData = () => {
  return axios.get(`${url}/stocks`);
};
