import { FC, Fragment } from "react";
import { CreateSong } from "../create-song/CreateSong";
import { ListSongs } from "../list-songs/ListSongs";

export const Home:FC = () => {
    return (
        <Fragment>
            <ListSongs />
            <CreateSong />
        </Fragment>
    )
}