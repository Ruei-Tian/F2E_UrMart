import { combineReducers } from 'redux';

import searchRecordReducer from './searchRecordReducer';
import loadingReducer from './loadingReducer';


const rootReducer = combineReducers({
  searchRecordReducer,
  loadingReducer,
});

export default rootReducer;
