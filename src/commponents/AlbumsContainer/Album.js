import React from 'react';
import css from './Albums.module.css'

const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div className={css.Album}>
            <div>id: {id}</div>
            <div>title: {title}</div>

        </div>
    );
};

export default Album;