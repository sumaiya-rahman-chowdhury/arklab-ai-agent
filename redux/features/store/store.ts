import { configureStore } from "@reduxjs/toolkit";
import agentReducer from "@/redux/features/slices/agentSlice";
import filterReducer from "@/redux/features/slices/filterSlice";

export const store = configureStore({
  reducer: {
    agent: agentReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
