import {
  TEST_ACTION,
  REQUEST_TEST_ACTION,
  SUCCESS_TEST_ACTION,
  FAILED_TEST_ACTION
} from '../types/actionTypes'

import {
  AppState,
  TestAction,
  RequestTestAction,
  SuccessTestAction,
  FaildTestAction
} from '../types/app'

export const testAction = (): TestAction => ({
  type: TEST_ACTION,
  payload: 'test'
});

export const requestTestAction = (id: string): RequestTestAction => ({
  type: REQUEST_TEST_ACTION,
  id
});

export const successTestAction = (payload: any): SuccessTestAction => ({
  type: SUCCESS_TEST_ACTION,
  payload
});

export const failedTestAction = (): FaildTestAction => ({
  type: FAILED_TEST_ACTION,
  payload: 'error'
});
