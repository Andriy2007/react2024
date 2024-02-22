import React, {useEffect, useState} from 'react';
import Album from "./Album";
import {albumsService} from "../../services/albumsService";
import css from "./Albums.module.css";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, []);

    return (
        <div className={css.Albums}>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};
export default Albums;