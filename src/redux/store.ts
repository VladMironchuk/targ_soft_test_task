import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modal';
import postsSlice from './slices/posts';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    posts: postsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
