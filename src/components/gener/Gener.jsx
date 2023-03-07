import React from "react";
import { Lable } from "../nav/navbar.style";
import { RiAlbumFill } from "react-icons/ri";
import {
  GenerContainer,
  GenerCard,
  GenerTitle,
  GenerList,
} from "./gener.style";
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
const Gener = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const songs = useSelector((state) => state.songs.songs);

  let genres = []
  

  for (let song of songs) {
    if (!genres.includes(song.gener)) {
      genres.push(song.gener);
    }
  }
  
  return (
    <GenerContainer>
      <Lable>Gener</Lable>
      <GenerList>
      {
        genres.map((element) => (
          <NavLink style={navLinkStyle}
            to={`/genre/${element}`}
            state={{ genreName: element }}>
            <GenerList>
              <GenerCard>
                <RiAlbumFill style={{ fontSize: "76px" }} />
                <GenerTitle>{element}</GenerTitle>
              </GenerCard>
            </GenerList>
          </NavLink>
        ))
      }
      </GenerList>
    </GenerContainer>
  );
};

export default Gener;
