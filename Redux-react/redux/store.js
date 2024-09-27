import {createStore} from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistCombineReducers  from './reducers/'


export const store = createStore(persistCombineReducers)
export const persistor = persistStore(store)