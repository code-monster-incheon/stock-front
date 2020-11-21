import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import data, { dataSaga } from "./data";

const rootReducer = combineReducers({
  data,
});

export function* rootSaga() {
  yield all([dataSaga()]);
}

export default rootReducer;
