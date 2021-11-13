import { Article } from "../../_model";

export const NEWS_LIST = "actionTypes/NEWS_LIST";

export const NEWS_LIST_REQUEST = "actionTypes/NEWS_LIST_REQUEST";
export interface NewsListRequestAction {
  type: typeof NEWS_LIST_REQUEST;
}

export const NEWS_LIST_SUCCESS = "actionTypes/NEWS_LIST_SUCCESS";
export interface NewsListSuccessAction {
  type: typeof NEWS_LIST_SUCCESS;
  data: Article;
}

export const NEWS_LIST_FAILURE = "actionTypes/NEWS_LIST_FAILURE";
export interface NewsListFailureAction {
  type: typeof NEWS_LIST_FAILURE;
  error: string;
}


export const NEWS_LIST_INITIAL = "actionTypes/NEWS_LIST_INITIAL";
export interface NewsListInitialAction {
  type: typeof NEWS_LIST_INITIAL;
}

export type NewsListActions =
  | NewsListRequestAction
  | NewsListSuccessAction
  | NewsListFailureAction
  | NewsListInitialAction;

