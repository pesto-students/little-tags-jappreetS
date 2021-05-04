import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import sideMenuStateReducer from './sideMenuStateReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  sideMenuSate: sideMenuStateReducer,
});

export default rootReducer;
