import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://enigmatic-springs-78905.herokuapp.com'
});

export default instance;
