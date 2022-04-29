import { configureStore } from '@reduxjs/toolkit';
//import { setUpListeners } from '@reduxjs/toolkit';
//import { appointmentApi } from '';
import fetchReducer from './actionCreater'

export const store = configureStore({
  reducer: fetchReducer,
})