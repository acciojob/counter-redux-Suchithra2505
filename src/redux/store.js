import { counterReducer } from "./reducer/counterRedcuer";
import { configureStore } from '@reduxjs/toolkit';
import {createStore} from 'redux'
export const store = configureStore({
    reducer: {
      counter: counterReducer
    }
  });


//export const store= createStore(counterReducer)