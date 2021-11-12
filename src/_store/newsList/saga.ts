import { call, put, takeEvery } from "redux-saga/effects";
import { ResultApiOur } from "../../_model";

import {
  getNewsListFailureAction,
  getNewsListSuccessAction,
  getNewsListInitialAction,
} from "./actionCreators";
import { NewsListRequestAction, NEWS_LIST_REQUEST, NewsListInitialAction ,NEWS_LIST_INITIAL } from "./actionTypes";
import { getNewsList } from "./api";



function* handleResponse(action: NewsListRequestAction) {
  try {
    const { data } = yield call(getNewsList);

    const response: ResultApiOur = data;


    yield put(getNewsListSuccessAction(response));
  } catch (error) {
    
    if (error.response && error.response.data.errorDescription) {
      yield put(getNewsListFailureAction(error.response.data.errorDescription));
    } else if (error.message) {
      yield put(getNewsListFailureAction(error.message));
    } else {
      yield put(getNewsListFailureAction('Some error occurred'));
    }

  }
}



export function* newsListSaga() {
  yield takeEvery(NEWS_LIST_REQUEST, handleResponse);
}
