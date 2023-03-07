import React from "react";
import { Lable } from "../nav/navbar.style";
import {
  AlbumsContainer,
  AlbumCard,
  AlbumTitle,
  AlbumsList,
} from "./albums.style";
import { IoIosAlbums } from "react-icons/io";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsStart } from "../musics/songSlice";

const navLinkStyle = {
  color: "#ececec",
  ":hover": {
    color: "#000",
  },
};
const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const songs = useSelector((state) => state.songs.songs);

  let albums = []

  for (let song of songs) {
    if (!albums.includes(song.album)) {
      albums.push(song.album);
    }
  }

  return (
    <AlbumsContainer>
      <Lable>Albums</Lable>
      <AlbumsList>
        {albums.map((element) => (
          <NavLink
            style={navLinkStyle}
            to={`/album/${element}`}
            state={{ albumName: element }}
          >
            <AlbumCard>
              <IoIosAlbums style={{ fontSize: "30px" }} />
              <AlbumTitle>{element}</AlbumTitle>
            </AlbumCard>
          </NavLink>
        ))}
      </AlbumsList>
    </AlbumsContainer>
  );
};

export default Albums;
