import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import {combineReducers} from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage'
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';



const reducers = combineReducers({
    auth: authReducer
  });


  const persistConfig = {
    key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});


export default store;