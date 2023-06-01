import { configureStore } from '@reduxjs/toolkit';
import postReducer from 'features/Posts';

const store = configureStore({
  reducer: {
    postsSlice: postReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
