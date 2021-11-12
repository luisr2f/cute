import { Alert } from "react-native";

interface ErrorAction {
    type: string;
    error: string | null;
  }
  
  export interface ErrorState {
    [key: string]: string | null;
  }
  
  const getErrorMatches = (actionType: string) => {
    return /(.*)_(REQUEST|FAILURE|CLEAR_ERRORS)/.exec(actionType);
  };
  
  function errorReducer(state: ErrorState = {}, action: ErrorAction): ErrorState {
    const matches = getErrorMatches(action.type);

  
    if (!matches) {
      return state;
    }
  
    const [, requestName, requestStatus] = matches;
    return {
      [requestName]: requestStatus === 'FAILURE' ? errorHandler(action.error) : null,
    };
  }


  function errorHandler(error: any) {

      console.log('Error reducer', JSON.stringify(error) );

      if (error == 'No managed exception') {
          return 'An error occurred, please try again later';
      }  else if (error.errorCode && error.errorDescription && error.errorCode!='' && error.errorDescription!='' && error.errorDescription=='No managed exception') {  
          return {errorCode: error.errorCode, errorDescription: 'An error occurred, please try again later'}
       } else {
          return error;
      }
  }
  
  export default errorReducer;
  
