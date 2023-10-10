import { combineReducers } from "redux";
import AddPackageReducer from "./AddPackageReducer";

const appReducer = combineReducers({
    AddPackage: AddPackageReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_ALL_DATA") {
    state = {
      auth: state.auth,
    };
  }
  return appReducer(state, action);
};
export default rootReducer;