import React from "react";
import {
  MusicContainer,
  MusicCard,
  HeaderListContainer,
  HeaderList,
  Lable,
  MusicListContainer,
  List,
  TableList,
  TableListRow,
  TableListHeader,
  TableListData,
  TableTopHeader,
  ActionsHolder,
  ActionButton,
} from "../albums/albums.style";
import { TbPlayerPlay } from "react-icons/tb";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsStart } from "../musics/songSlice";

const musics = [
  {
    no: 1,
    title: "Despacito",
    album: "Despacito",
    artist: "Louis Fonsi",
    gener: "Latino",
  },
  {
    no: 2,
    title: "Despacito",
    album: "Despacito",
    artist: "Louis Fonsi",
    gener: "Latino",
  },
  {
    no: 3,
    title: "Despacito",
    album: "Despacito",
    artist: "Louis Fonsi",
    gener: "Latino",
  },
  {
    no: 4,
    title: "Despacito",
    album: "Despacito",
    artist: "Louis Fonsi",
    gener: "Latino",
  },
];
const GenreMusics = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchSongsStart());
    }, [dispatch]);

    const songs = useSelector((state) => state.songs.songs);

    const location = useLocation();
    const {state} = location;
    let filteredMusics = songs.filter(music => music?.gener === state?.genreName);

  return (

    <MusicContainer>
      <Lable>{state?.genreName}</Lable>

      <TableList>
        <TableTopHeader>
          <TableListRow>
            <TableListHeader>No</TableListHeader>
            <TableListHeader>Title</TableListHeader>
            <TableListHeader>Artist</TableListHeader>
            <TableListHeader>Album</TableListHeader>
            <TableListHeader>Gener</TableListHeader>
            <TableListHeader>Actions</TableListHeader>
          </TableListRow>
        </TableTopHeader>

        <tbody>
          {filteredMusics?.map((music,index) => (
            <TableListRow>
              <TableListData>{index+1}</TableListData>
              <TableListData>{music?.title}</TableListData>
              <TableListData>{music?.artist}</TableListData>
              <TableListData>{music?.album}</TableListData>
              <TableListData>{music?.gener}</TableListData>
              <ActionsHolder>
                <ActionButton>
                  <TbPlayerPlay />
                </ActionButton>
                <ActionButton>
                  <MdOutlineEdit />
                </ActionButton>
                <ActionButton>
                  <MdOutlineDeleteOutline />
                </ActionButton>
              </ActionsHolder>
            </TableListRow>
          ))}
        </tbody>
      </TableList>
    </MusicContainer>
  );
};

export default GenreMusics;
