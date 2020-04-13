import axios from 'axios';
import {baseApi} from '../../api/pharm_tech_api';

export const getUserDetails = async () => {
  try {
    const res = await axios.get(
      'https://pharm-tech-api.herokuapp.com/account/userdetail',
    );
    return res;
  } catch (err) {
    return error.response.data;
  }
};
