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
            console.log(action, state);
            state.blogs.filter(blog => blog.id !== action.payload)
        },
    },
})

export const {remove, add} = blogSlice.actions;

export default blogSlice.reducer;