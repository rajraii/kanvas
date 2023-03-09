import axios from 'axios';

const jwtAxios = axios.create({
  baseURL: process.env.REACT_APP_API_KEY, 
  headers: {
    'Content-Type': 'application/json',
  },
});
jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      console.log('Need to logout user');
      // store.dispatch({type: LOGOUT});
    }
    return Promise.reject(err);
  },
);
export const setAuthToken = (token) => {
  if (token) {
    jwtAxios.defaults.headers.common['auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete jwtAxios.defaults.headers.common['auth-token'];
    localStorage.removeItem('token');
  }
};

export default jwtAxios;