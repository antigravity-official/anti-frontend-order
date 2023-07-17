import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { myOrderReducer } from './slices/myOrderSlice';

const rootReducer = combineReducers({
  myOrder: myOrderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
