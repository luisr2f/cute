import { all } from "redux-saga/effects";

import { newsListSaga } from "../newsList/saga";













export function* rootSaga() {
  const sagasList = [
    
    newsListSaga(),



  ];
  yield all(sagasList);
}
