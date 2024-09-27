import dataReducer from "./data/dataReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, combineReducers } from "@reduxjs/toolkit";

const combineReducers = combineReducers( {
    data : dataReducer
})


const persistedReducers = persistReducer({key:'rootPersistor' , storage,whitelist:['data'] })

export default persistedReducers