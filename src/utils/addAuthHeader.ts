import api from '../lib/axios/api';

import { parseCookies } from 'nookies';

const addAuthHeader = () => {

  const { 'subone.token': token } = parseCookies();

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export default addAuthHeader;