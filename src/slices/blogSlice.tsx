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
        edit: (state: IBlogs, action: PayloadAction<IBlog>) => {
            state.blogs.map(post => {
                if (post.id === action.payload.id) {
                    post.title = action.payload.title;
                    post.text = action.payload.text;
                }
            })
        },
    },
})

export const {remove, add, edit} = blogSlice.actions;

export default blogSlice.reducer;