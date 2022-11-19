import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postsSlice from "./slices/posts.slice";
import {postsApi} from "./slices/fetchPosts";

const rootReducer = combineReducers({
    posts: postsSlice,
    [postsApi.reducerPath]: postsApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(postsApi.middleware)
})
