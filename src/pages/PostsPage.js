import React, {useEffect, useState} from 'react';
import Post from "../commponents/PostsContainer/Post";
import {useLocation} from "react-router-dom";
import {postsService} from "../services/postsService";

const PostsPage = () => {
    const [post, setPost] = useState(null)
    const {state: {postId}} = useLocation()

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export default PostsPage;