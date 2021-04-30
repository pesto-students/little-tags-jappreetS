import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import sideMenuSateReducer from './sideMenuSateReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  sideMenuSate: sideMenuSateReducer,
});

export default rootReducer;
