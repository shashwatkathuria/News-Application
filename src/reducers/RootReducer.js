import { combineReducers } from 'redux';

import newsReducer from './NewsReducer';

const AppReducers = combineReducers({
  newsReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
}

export default rootReducer;
