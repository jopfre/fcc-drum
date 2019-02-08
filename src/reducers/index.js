import { combineReducers } from 'redux';
import samplesReducer from './samplesReducer';

export default combineReducers({
  samples: samplesReducer
});
