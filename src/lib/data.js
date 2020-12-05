import axios from 'axios';
const url = 'https://themaju.herokuapp.com';

export const getData = () => {
  return axios.get(`${url}/stocks`);
};
