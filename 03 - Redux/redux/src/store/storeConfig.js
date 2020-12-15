import { createStore, combineReducers } from 'redux';
import numerosReducer from './reducers/numeros';

const reducers = combineReducers({
  numbers: numerosReducer
});

export default function storeConfig() {
  return createStore(reducers);
} 