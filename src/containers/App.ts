import { Dispatch } from 'redux';
import { connect } from 'react-redux';
// import component
import App from '../components/App';
// import action
import { 
  testAction,
  requestTestAction
} from '../actions/appAction';
// import type
import { ApplicationState } from '../reducers/index';
import { AppState } from '../types/app';

export interface AppProps {
  app: AppState
  testAction: () => void
  requestTestAction: (id: string) => void
}

const mapStateToProps = (state: ApplicationState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  testAction: () => {
    dispatch(testAction());
  },
  requestTestAction: (id: string) => {
    dispatch(requestTestAction(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);