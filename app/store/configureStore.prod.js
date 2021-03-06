// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const enhancer = applyMiddleware(thunk);

function configureStore(initialState?: rootStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore };
