import {
  CREATE_ADDPACKAGE,
  CREATE_ADDPACKAGE_SUCCESS,
  CREATE_ADDPACKAGE_FAILURE,
  GET_ADDPACKAGE,
  GET_ADDPACKAGE_SUCCESS,
  GET_ADDPACKAGE_FAILURE,
} from "../actions/AddPackage/actionTypes";

const initialState = {
  getListLoading: false,
  data: {
    results: 0,
    total: 0,
    packages: []
  },
  createData: null
};

// course category reducer funtions
const createAddPackage = (state, action) => ({
  ...state,
  getListLoading: true,
});

const createAddPackageSuccess = (state, action) => {

  return {
    ...state,
    getListLoading: false,
    createData: action.payload,
  };
};

const createAddPackageFailed = (state, action) => ({
  ...state,
  getListLoading: false,
  createData: [],
});

const getAddPackage = (state, action) => {
  let data = {
    ...state.data
  }
  if (action.payload.page == 1) {
    data = {
      results: 0,
      total: 0,
      packages: []
    }
  }
  return {
    ...state,
    data: data
  }
  // getListLoading: true,
};

const getAddPackageSuccess = (state, action) => {

  action.payload.packages = [...state.data.packages, ...action.payload.packages]
  return {
    ...state,
    // getListLoading: false,
    data: action.payload,
  };
};

const getAddPackageFailed = (state, action) => ({
  ...state,
  // getListLoading: false,
  data: {
    results: 0,
    total: 0,
    packages: []
  },
});


const AddPackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ADDPACKAGE:
      return createAddPackage(state, action);
    case CREATE_ADDPACKAGE_SUCCESS:
      return createAddPackageSuccess(state, action);
    case CREATE_ADDPACKAGE_FAILURE:
      return createAddPackageFailed(state, action);
    case GET_ADDPACKAGE:
      return getAddPackage(state, action);
    case GET_ADDPACKAGE_SUCCESS:
      return getAddPackageSuccess(state, action);
    case GET_ADDPACKAGE_FAILURE:
      return getAddPackageFailed(state, action);
    default:
      return state;
  }
};

export default AddPackageReducer;
