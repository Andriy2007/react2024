import React from 'react';
import css from './Comments.module.css'
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate()

    return (
        <div className={css.Comment}>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={()=>navigate('post', {state: {postId}})}>getpost</button>

        </div>
    );
};

export default Comment;