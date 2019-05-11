import { combineReducers } from 'redux';
import testReducer from '../../features/event/testarea/testReducer';

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
