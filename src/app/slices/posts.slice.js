import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk('posts/getPosts', async (page= '1', {rejectedWithValue})=>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
        return response.data
    }catch (err){
        return err
    }
})


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        error: '',
        posts: []
    },
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.isLoading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = ''
            state.posts = action.payload
        },
        [getPosts.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default postsSlice.reducer
