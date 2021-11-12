import { combineReducers } from "redux";

import errorReducer from "../utils/errorReducer";
import loadingReducer from "../utils/loadingReducer";

import { newsListReducer } from "../newsList/reducer";







const appReducer = combineReducers({
 
  isLoading: loadingReducer,
  error: errorReducer,

  newsListState: newsListReducer,

  
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type StoreState = ReturnType<typeof rootReducer>;
export default rootReducer;
