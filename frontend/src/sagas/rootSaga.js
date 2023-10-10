import { all } from "redux-saga/effects";
import AddPackage from "./AddPackageSaga";

export default function* rootSaga() {

  yield all([
    AddPackage()
  ]);
}