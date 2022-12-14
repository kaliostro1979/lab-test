import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "postsAPI",
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: ({page, limit}) => `/posts?_page=${page}&_limit=${limit}`,
            transformResponse(apiResponse, meta) {
                return { apiResponse, totalCount: Number(meta.response.headers.get('X-Total-Count')) }
            }
        })
    })
})

export const {useGetAllPostsQuery} = postsApi
