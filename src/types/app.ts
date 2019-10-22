// import action type
import {
  TEST_ACTION,
  REQUEST_TEST_ACTION,
  SUCCESS_TEST_ACTION,
  FAILED_TEST_ACTION
} from './actionTypes';

// app state types
export interface AppState {
  test: string
  loading: boolean
  data: any
}

// action
export interface TestAction {
  type: typeof TEST_ACTION,
  payload: AppState['test']
}

export interface RequestTestAction {
  type: typeof REQUEST_TEST_ACTION,
  id: string
}

export interface SuccessTestAction {
  type: typeof SUCCESS_TEST_ACTION,
  payload: AppState['data']
}

export interface FaildTestAction {
  type: typeof FAILED_TEST_ACTION,
  payload: any
}

export type AppActionTypes = 
  TestAction |
  RequestTestAction |
  SuccessTestAction |
  FaildTestAction

