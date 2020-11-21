import axios from "axios";
const url = "http://localhost:8080";

export const getData = () => {
  return axios.get(`${url}/api/data`);
};
