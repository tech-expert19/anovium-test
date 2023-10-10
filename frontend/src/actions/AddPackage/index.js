import {
    CREATE_ADDPACKAGE,
    CREATE_ADDPACKAGE_SUCCESS,
    CREATE_ADDPACKAGE_FAILURE,
    GET_ADDPACKAGE,
    GET_ADDPACKAGE_SUCCESS,
    GET_ADDPACKAGE_FAILURE,
  } from "./actionTypes";
  
  // Signin actions function
  export const createAddPackage = (data) => ({
    type: CREATE_ADDPACKAGE,
    payload: data,
  });
  
  export const createAddPackageSuccess = (data) => ({
    type: CREATE_ADDPACKAGE_SUCCESS,
    payload: data,
  });
  
  export const createAddPackageFailure = () => ({
    type: CREATE_ADDPACKAGE_FAILURE,
  });

  export const getAddPackage = (data) => ({
    type: GET_ADDPACKAGE,
    payload: data,
  });
  
  export const getAddPackageSuccess = (data) => ({
    type: GET_ADDPACKAGE_SUCCESS,
    payload: data,
  });
  
  export const getAddPackageFailure = () => ({
    type: GET_ADDPACKAGE_FAILURE,
  });