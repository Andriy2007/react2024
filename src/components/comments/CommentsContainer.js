import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/CommentsService";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            <CommentForm/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsContainer;