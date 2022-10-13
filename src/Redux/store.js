import { combineReducers, legacy_createStore } from "redux";
import {reducer as AppReducer} from './app/reducer';
import {reducer as AuthReducer} from './app/reducer';

const rootReducer = combineReducers({AppReducer, AuthReducer})

export const store = legacy_createStore(rootReducer);