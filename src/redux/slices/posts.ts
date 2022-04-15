import { createSlice } from '@reduxjs/toolkit';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface State {
  posts: Post[];
  indexToDelete: number;
}

const initialState: State = {
  posts: [],
  indexToDelete: -1,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    initPost(state, action) {
      const postsState = state;
      postsState.posts = action.payload.posts;
    },
    addPost(state, action) {
      const postsState = state;
      postsState.posts = [
        ...postsState.posts,
        {
          ...action.payload.post,
          userId: 11,
          id: (postsState.posts.at(-1)?.id || 0) + 1,
        },
      ];
    },
    changeIdToDelete(state, action) {
      const postsState = state;
      postsState.indexToDelete = action.payload.indexToDelete;
    },
    deletePost(state) {
      const postState = state;
      postState.posts = postState.posts.filter(
        (_, index) => index !== postState.indexToDelete
      );
    },
    resetIdToDelete(state) {
      const postState = state;
      postState.indexToDelete = -1;
    },
  },
});

export const postsAction = postsSlice.actions;
export default postsSlice;
