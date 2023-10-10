import { all, call, put, takeLatest } from "redux-saga/effects";
import { CREATE_ADDPACKAGE, GET_ADDPACKAGE, } from "../actions/AddPackage/actionTypes";
import { createAddPackageSuccess, createAddPackageFailure, getAddPackageSuccess, getAddPackageFailure, } from "../actions/AddPackage/index";
import { postRequest, getRequest, } from "./request";
import URls from "../constants/urls";
// toaster
import { toast } from 'react-toastify';

function* createAddPackageCall(action) {
  try {
    const response = yield call(postRequest, URls.AddPackage, action.payload);
    console.log(response)
    if (response?.status === 201) {
      toast("Success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      yield put(createAddPackageSuccess(response.data));
      window.location.href='/'
    } else {
      toast.error(response?.data?.detail, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  } catch (error) {
    yield put(createAddPackageFailure());
  }
}


function* getAddPackageCall(action) {
  console.log("data ", action)
  let url = `${URls.AddPackage}?limit=10&page=${action.payload.page}`
  if (action.payload.search) {
    url += `&search=${action.payload.search}`
  }
  try {
    const response = yield call(getRequest, url);
    if (response?.status === 200) {
      yield put(getAddPackageSuccess(response.data));
    }
  } catch (error) {
    yield put(getAddPackageFailure());
  }
}

function* watchGetRequest() {
  yield takeLatest(CREATE_ADDPACKAGE, createAddPackageCall);
  yield takeLatest(GET_ADDPACKAGE, getAddPackageCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
