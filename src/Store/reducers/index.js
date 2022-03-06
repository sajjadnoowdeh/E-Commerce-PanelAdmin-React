import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userReducer from "./user.reducer/user.reducer";
import productReducer from "./product.reducer/product.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  products:productReducer
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
