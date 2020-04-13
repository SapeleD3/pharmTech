import axios from 'axios';

url = 'https://pharm-tech-api.herokuapp.com';

const baseApi = axios.create({
  baseURL: url,
});

const loginCall = async info => {
  try {
    const response = await baseApi.post('/account/login', info);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getCategoryCall = async info => {
  try {
    const response = await baseApi.get('/category/');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const postCategoryCall = async info => {
  try {
    const response = await axios.post(`${url}/category/`, info);
    return response.data;
  } catch (error) {
    console.log('error', error.response.data);
    return error.response.data;
  }
};

const getdrugCall = async info => {
  try {
    const response = await baseApi.get('/drug/');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const postdrugCall = async info => {
  try {
    const response = await axios.post(`${url}/drug/`, info);
    return response.data;
  } catch (error) {
    console.log('error', error.response.data);
    return error.response.data;
  }
};

export {
  baseApi,
  loginCall,
  getCategoryCall,
  postCategoryCall,
  getdrugCall,
  postdrugCall,
};
