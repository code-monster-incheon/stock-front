import axios from 'axios';
const url = 'http://themaju.herokuapp.com';

export const getData = () => {
  return axios.get(`${url}/stocks`);
};
