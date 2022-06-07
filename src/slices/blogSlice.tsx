import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IBlogs {
    blogs: IBlog[]
}

export interface IBlog {
    id: number,
    title: string,
    text: string
}

const initialState: IBlogs = {
    blogs: []
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        add: (state: IBlogs, action: PayloadAction<IBlog>) => {
            state.blogs.push(action.payload)
        },
        remove: (state: IBlogs, action: PayloadAction<number>) => {
            const result = state.blogs.filter(blog => blog.id !== action.payload)
            state.blogs = [];
            state.blogs.push(...result);
        },
    },
})

export const {remove, add} = blogSlice.actions;

export default blogSlice.reducer;