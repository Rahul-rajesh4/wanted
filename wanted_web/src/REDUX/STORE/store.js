import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../SLICE/counterSlice"
export const store = configureStore({
    reducer:{
        display : counterReducer,
    },
    
})