import React, { useState } from "react";
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
  Actions,
  AddNewMusic,
  AddNew,
  Background,
} from "./musiclist.style";
import { primaryColor } from "../nav/navbar.style";
import { TbPlayerPlay } from "react-icons/tb";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { SearchBar, SearchContainer } from "../nav/navbar.style";
import { TfiSearch } from "react-icons/tfi";
import { MdAddCircleOutline } from "react-icons/md";
import AddMusicModal from "../modals/addMusic";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsStart } from './songSlice';

import Modal from '../modals/addMusic'
import DeleteConfirmationModal from '../modals/deleteMusicModal'
import { openModal,closeModal, submitForm } from './addMusicSlice';
import EditModal from "../modals/editMusicData";



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
const MusicList = () => {

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);
  
  const songs = useSelector((state) => state.songs.songs);
  
  const SearchBarStyle = {
    type: "search",
    height: "35px",
    borderRadius: "10px",
    width: "35%",
  };

  const iconStyle = {
    position: "absolute",
    top: "12px",
    left: "15px",
    fontSize: "18px",
    color: "#24cec8",
  };


  return (
    <>
      <MusicContainer>
        <Actions>
          <Lable>Musics</Lable>
          <SearchContainer>
            <TfiSearch style={iconStyle} />
            <SearchBar searchStyle={SearchBarStyle} />
          </SearchContainer>
          {/* <AddNewMusic onClick={toggleModal}>
            <MdAddCircleOutline style={{ fontSize: "24px" }} />
            Add Song
          </AddNewMusic> */}
          <Modal/>
        </Actions>

        <TableList>
          <TableTopHeader>
            <TableListRow>
              <TableListHeader>No</TableListHeader>
              <TableListHeader>Title</TableListHeader>
              <TableListHeader>Artist</TableListHeader>
              <TableListHeader>Album</TableListHeader>
              <TableListHeader>Genre</TableListHeader>
              <TableListHeader>Actions</TableListHeader>
            </TableListRow>
          </TableTopHeader>

          <tbody>
            {songs?.map((music, index) => (
              <TableListRow>
                <TableListData key={music?.id}>{index+1}</TableListData>
                <TableListData key={music?.id}>{music?.title}</TableListData>
                <TableListData key={music?.id}>{music?.artist}</TableListData>
                <TableListData key={music?.id}>{music?.album}</TableListData>
                <TableListData key={music?.id}>{music?.gener}</TableListData>
                <ActionsHolder>
                  <ActionButton>
                    <TbPlayerPlay />
                  </ActionButton>
                  <EditModal music={music} />
                  <DeleteConfirmationModal music={music?._id} />
                </ActionsHolder>
              </TableListRow>
            ))}
          </tbody>
        </TableList>
      </MusicContainer>
    </>
  );
};

export default MusicList;
