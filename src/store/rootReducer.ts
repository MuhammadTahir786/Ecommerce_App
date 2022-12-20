import { combineReducers } from 'redux';
import { ProductReducer } from './reducers/productReducer';

export const rootReducer=combineReducers({
 products:ProductReducer,
})

