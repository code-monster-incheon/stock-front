import { createAction, handleActions } from "redux-actions";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../Utils/ActionTypes";

import { getData } from "../lib/data";

export const [
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAILURE,
] = ActionTypes("data/SEARCH_DATA");

export const searchDataRequest = createAction(
  SEARCH_DATA_REQUEST,
  (param) => param
);

function* getKakaoBook(action) {
  console.log("action", action);
  try {
    const response = yield call(getData, action.payload);
    
    console.log("response :", response);

    yield put({
      type: SEARCH_DATA_SUCCESS,
      payload: response,
    });

  } catch (e) {
    yield put({
      type: SEARCH_DATA_FAILURE,
      payload: e,
      error: true,
    });
  }
}

export function* dataSaga() {
  yield takeLatest(SEARCH_DATA_REQUEST, getKakaoBook);
}

const initialState = {
  resultDatas : null,
  isLoading : false
};

const data = handleActions(
  {
    [SEARCH_DATA_REQUEST]: (state, action) => ({
      ...state,
    
    }),

    [SEARCH_DATA_SUCCESS]: (state, action) => ({
      ...state,
      resultDatas : action.payload.data,
      isLoading: true
    }),
  },
  initialState
);

export default data;
