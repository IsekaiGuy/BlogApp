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
    blogs: [{
        id: 1,
        title: 'First title',
        text: 'Some text'
    }]
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        add: (state: BlogState, action: PayloadAction<Blog>) => {
            state.blogs.push(action.payload)
        },
        delete: (state: BlogState, action: any) => {
            state.blogs.filter(blog => blog.id !== action.payload.id)
        },
    },
})

export const { add, delete } = blogSlice.actions;

export default blogSlice.reducer;