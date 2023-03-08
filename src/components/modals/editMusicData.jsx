import React, { useState } from 'react';
import styled from 'styled-components';
import {
    ActionButton
  } from "../musics/musiclist.style";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { openModal,closeModal, editForm,submitFormSuccess, submitFormFailure } from '../musics/editMusicSlice';
import { primaryColor, secondaryColor } from "../nav/navbar.style";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  width: 350px;
  max-width: 90%;
`;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 0.5rem;
//   right: 0.5rem;
//   font-size: 1.2rem;
//   font-weight: bold;
//   border: none;
//   background-color: transparent;
//   cursor: pointer;
// `;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 8px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
width: 100%;
margin-bottom: 16px;
padding: 8px;
border-radius: 4px;
border: 1px solid #ccc;
border-color: ${primaryColor};

`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: none;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${primaryColor};
  &:hover {
    color: ${secondaryColor};
  }
`;

const EditModal = ({ music }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(music.title);
  const [album, setAlbum] = useState(music.album);
  const [artist, setArtist] = useState(music.artist);
  const [gener, setGener] = useState(music.gener);
  let id = music._id


  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };



  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editForm({ title, album, artist, gener, id }));
    setShow(false);
    window.location.reload()
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAlbumChange = (event) => {
    setAlbum(event.target.value);
  };
  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };
  const handleGenreChange = (event) => {
    setGener(event.target.value);
  };


  return (
    <>
    <ActionButton onClick={handleOpen}>
        <MdOutlineEdit />
    </ActionButton>
    {show && (
        <Modal>
            <ModalContent>
                <CloseButton onClick={handleClose}>&times;</CloseButton>
                <Form onSubmit={handleSubmit}>
                <Label>Title</Label>
                <Input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    />
                <Label>Artist</Label>
                <Input
                    type="text"
                    value={artist}
                    onChange={handleArtistChange}
                />
                <Label>Album</Label>
                <Input
                    type="text"
                    value={album}
                    onChange={handleAlbumChange}
                />
                <Label>Genre</Label>
                <Input
                    type="text"
                    value={gener}
                    onChange={handleGenreChange}
                />
                <Button onClick={handleSubmit} type="submit">Save</Button>
                </Form>
            </ModalContent>
        </Modal>
    )}
    </>
  );
};

export default EditModal;
