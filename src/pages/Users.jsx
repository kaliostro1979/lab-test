import React, {useState} from 'react';
import {useApolloClient, useQuery} from "@apollo/client";
import {GET_ALL_USERS, GET_USER} from "../app/graphql/users";
import {GET_ALL_POSTS, GET_POSTS_BY_USERID} from "../app/graphql/posts";

const Users = () => {
    const [userId, setUserId] = useState(1)
    const {data, loading, error} = useQuery(GET_ALL_USERS)
    /*const {data: user, loading: loadingUser} = useQuery(GET_USER)*/
    const {data: posts, loading: postsLoading} = useQuery(GET_ALL_POSTS)
    const {data: userPosts, loading: postLoading} = useQuery(GET_POSTS_BY_USERID, {variables: {userId: userId}})

    return (
        <div>
            {error ? <strong>{error}</strong> : null}
            {
                !loading ? data.users.map(user=>{
                    return <div key={user.id} style={{display: "flex", justifyContent: "space-between", marginBottom: 20}}>
                        <p>
                            <span>{user.id}</span> - <strong>{user.name}</strong> - {user.username} - <span>{user.email}</span>
                        </p>
                        <button onClick={()=>setUserId(user.id)}>Load User Posts</button>
                    </div>
                }) : <h1>Loading...</h1>
            }

            <div style={{marginTop: 50}}>
                {
                    !postLoading ? userPosts.posts.map(post=>{
                        return <h2 key={post.id}>{post.userId} - {post.title}</h2>
                    }) : <h1>Loading...</h1>
                }
            </div>
        </div>
    );
};

export default Users;
