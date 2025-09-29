import { legacy_createStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

const store=legacy_createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store