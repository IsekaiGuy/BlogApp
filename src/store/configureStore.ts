import { configureStore } from '@reduxjs/toolkit'
import blogs from '../slices/changeBlogPost';

export const store = configureStore({
    reducer: {
        blogs
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch