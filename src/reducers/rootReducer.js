import { combineReducers } from 'redux';

import searchResultReducer from './searchResultReducer';
import loadingReducer from './loadingReducer';


const rootReducer = combineReducers({
  searchResultReducer,
  loadingReducer,
});

export default rootReducer;
