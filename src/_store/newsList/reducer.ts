import { Article } from "../../_model";
import { NewsListActions, NEWS_LIST_INITIAL, NEWS_LIST_SUCCESS } from "./actionTypes";

export interface NewsListState {
  result: Article | null;
}

const initialState: NewsListState = {
  result: null,
};

export function newsListReducer(
  state: NewsListState = initialState,
  action: NewsListActions
): NewsListState {
  if (action.type === NEWS_LIST_SUCCESS) {
    return {
      ...state,
      result: action.data,
    };
  } else if (action.type === NEWS_LIST_INITIAL) {
    return {
      ...state,
      result: initialState.result,
    };
  } else {
    return state;
  }
}
