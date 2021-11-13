import { Article } from "../../_model";
import * as actions from "./actionTypes";

export function getNewsListRequestAction(): actions.NewsListRequestAction {
  return {
    type: actions.NEWS_LIST_REQUEST
  };
}



export function getNewsListSuccessAction(
  data: Article
): actions.NewsListSuccessAction {
  return {
    type: actions.NEWS_LIST_SUCCESS,
    data,
  };
}

export function getNewsListFailureAction(
  error: string
): actions.NewsListFailureAction {
  return {
    type: actions.NEWS_LIST_FAILURE,
    error,
  };
}


export function getNewsListInitialAction(): actions.NewsListInitialAction {  
  return {
    type: actions.NEWS_LIST_INITIAL,
  };
}

