import { fork, takeEvery, put, call } from 'redux-saga/effects';
//actionTypes type
import { REQUEST_TEST_ACTION } from '../types/actionTypes';
// action type
import { RequestTestAction } from '../types/app';
// actions
import { successTestAction, failedTestAction } from '../actions/appAction';

function* runReacestTestAction(action: RequestTestAction) {
  const { id } = action;
  yield put(successTestAction(`success: ${id}`))
  // const { payload, error } = call(api)
  // if(!error){
  //   yield put(successTestAction(id))
  // }else{
  //   put(failedTestAction(error));
  // }
}

function* handleReacestTestAction() {
  yield takeEvery(REQUEST_TEST_ACTION, runReacestTestAction)
}

export default function* rootSaga() {
  yield fork(handleReacestTestAction);
}