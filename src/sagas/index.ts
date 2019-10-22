import { fork } from 'redux-saga/effects';
import appSaga from '../sagas/appSaga';

export default function* rootSaga() {
  yield fork(appSaga)
}
