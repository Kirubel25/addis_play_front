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
} from "./albums.style";
import { TbPlayerPlay } from "react-icons/tb";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsStart } from "../musics/songSlice";

const AlbumMusics = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchSongsStart());
    }, [dispatch]);

    const songs = useSelector((state) => state.songs.songs);

    const location = useLocation();
    const {state} = location;
    let filteredMusics = songs.filter(music => music.album === state?.albumName);

  return (

    <MusicContainer>
      <Lable>{state?.albumName}</Lable>

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

export default AlbumMusics;
