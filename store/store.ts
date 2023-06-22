import { configureStore } from '@reduxjs/toolkit';
import postReducer from 'store/slices/Posts';
import cartReducer from 'store/slices/Cart';

const store = configureStore({
  reducer: {
    postsSlice: postReducer,
    cartSlice: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
