import { combineReducers } from 'redux';
import FormsReducer from './FormsReducer';
import GenericReducer from './GenericReducer';

const rootReducer = combineReducers({
  generic: GenericReducer,
  forms: FormsReducer,
});

export default rootReducer;
