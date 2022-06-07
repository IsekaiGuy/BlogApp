import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BlogState {
    blogs: string[]
}

const initialState: BlogState = {
    blogs: []
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        add: (state: BlogState, action: PayloadAction<string>) => {
            state.blogs.push(action.payload)
        }
    },
})

export const { add } = blogSlice.actions;

export default blogSlice.reducer;