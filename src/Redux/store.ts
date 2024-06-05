import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "../services/request";
import { setupListeners } from "@reduxjs/toolkit/query";
import openCategoryReducer from "./features/slice";
import filteredByCategoryReducer from "./features/filterSlice";
import rentedCarInfoReducer from "./features/rentedInfo";

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    openCategory: openCategoryReducer,
    filteredCategory: filteredByCategoryReducer,
    rentedInfo: rentedCarInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
