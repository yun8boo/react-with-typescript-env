import React from 'react';
import ReactDOM from 'react-dom';
// for router
import { ConnectedRouter } from 'connected-react-router';
// for redux
import { Provider } from 'react-redux';
import store, { history } from './reducers/index';

import App from './containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);