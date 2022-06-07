import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BlogState {
    blogs: Blog[]
}

export interface Blog {
    id: number,
    title: string,
    text: string
}

const initialState: BlogState = {
    blogs: []
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        add: (state: BlogState, action: PayloadAction<Blog>) => {
            state.blogs.push(action.payload)
        },
        remove: (state: BlogState, action: any) => {
            const result = state.blogs.filter(blog => blog.id !== action.payload)
            state.blogs = [];
            state.blogs.push(...result);
        },
    },
})

export const {remove, add} = blogSlice.actions;

export default blogSlice.reducer;