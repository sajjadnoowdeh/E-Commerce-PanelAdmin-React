import axios from "axios";


const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;
const publicRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
});

const userRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
});

userRequest.interceptors.request.use(
  function (config) {
      config.headers = {
           'Authorization':`Bearer ${JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken}`,
           'Content-Type':'application/json'
      }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { publicRequest, userRequest };
