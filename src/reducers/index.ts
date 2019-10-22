// for redux
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'; // saga middleware
// for router
import { createBrowserHistory } from 'history';
import { RouterState, routerMiddleware, connectRouter } from 'connected-react-router';
// import types
import { AppState } from '../types/app';
// import reducer
import appReducer from './appReducer';
// import saga
import rootSaga from '../sagas/index';

export interface ApplicationState {
  router: RouterState;
  app: AppState;
}

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    router: connectRouter(history),
    app: appReducer
  }),
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
