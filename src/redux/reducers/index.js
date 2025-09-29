import { combineReducers } from "@reduxjs/toolkit";
import { productReducer,selectedProductReducer } from "./productReducer";

export const reducers=combineReducers({
     allProducts:productReducer,
     products:selectedProductReducer,
})