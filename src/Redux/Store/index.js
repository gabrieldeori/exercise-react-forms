import { createStore, combineReducers } from 'redux';
import { GenericReducer } from '../Reducers';

const rootReducer = combineReducers({
  generic: GenericReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
