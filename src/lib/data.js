import axios from 'axios';
const url = 'http://themaju.herokuapp.com/stocks ';

export const getData = () => {
  return axios.get(`${url}/stocks`);
};
