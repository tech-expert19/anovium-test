import api from "../service/api";

export const getRequest = async (requestUrl, data) =>
api
    .get(requestUrl)
    .then((resp) => resp)
    .catch((error) => error.response);

export const postRequest = async (requestUrl, data) =>{
  return api
    .post(requestUrl, data)
    .then((resp) => resp)
    .catch((error) => error.response);
}