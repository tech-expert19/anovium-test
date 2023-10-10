import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = apiUrl;

axios.interceptors.request.use(
  async config => {
    const token = 'token' //await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = "Bearer " + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

export default axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
