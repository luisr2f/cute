import { call, put, takeEvery } from "redux-saga/effects";
import { ResultApiOur } from "../../_model";

import {
  getNewsListFailureAction,
  getNewsListSuccessAction,
  getNewsListInitialAction,
} from "./actionCreators";
import { NewsListRequestAction, NEWS_LIST_REQUEST, NewsListInitialAction, NEWS_LIST_INITIAL } from "./actionTypes";
import { getNewsList } from "./api";

import AsyncStorage from '@react-native-async-storage/async-storage';

function* handleResponse(action: NewsListRequestAction) {
  try {
    const { data } = yield call(getNewsList);

    const response = data.articles;
    let result = [];

    let items = yield call(AsyncStorage.getItem, "@favorite");
    if (items != null) {
      let obj = JSON.parse(items);
      obj.map((objItem) => {
        result.push(objItem);
      });
      let urls = [];
      obj.map((objItem) => {
        urls.push(objItem.url);
      });
      response.map((item) => {
        if (!urls.includes(item.url)) {
          result.push(item);
        }
      });

      
    } else {
      response.map((item) => {
          result.push(item);
      });
    }



    yield put(getNewsListSuccessAction(result));
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
