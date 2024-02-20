import React from 'react';
import {useForm} from "react-hook-form";

const CommentForm = () => {
    const {reset, register, handleSubmit} = useForm()

    const save = (comment) => {
        console.log(comment)
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>

        </form>
    );
};

export default CommentForm;