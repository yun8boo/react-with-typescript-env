// import type
import { AppState, AppActionTypes } from '../types/app';
// import actionType
import {
  TEST_ACTION,
  REQUEST_TEST_ACTION,
  SUCCESS_TEST_ACTION,
  FAILED_TEST_ACTION
} from '../types/actionTypes';

const initialState: AppState = {
  test: '',
  loading: false,
  data: '',
};

const appReducer = (
  state = initialState,
  action: AppActionTypes
): AppState => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        test: action.payload
      }
    case REQUEST_TEST_ACTION:
    return {
      ...state,
      loading: true
    }
    case SUCCESS_TEST_ACTION:
    return {
      ...state,
      loading: false,
      data: action.payload,
    }
    case FAILED_TEST_ACTION:
    return {
      ...state,
      loading: false,
      data: action.payload,
    }
    default:
      return state;
  }
};

export default appReducer;