import { combineReducers } from 'redux'
import userReducer from './user/userSlice';
import catalogReducer from './catalog/catalogSlice';


export const rootReducer = combineReducers({
    user: userReducer,
    catalog: catalogReducer,
});