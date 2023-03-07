import React, { useState } from "react";
import styled from "styled-components";
import { primaryColor, secondaryColor } from "../nav/navbar.style";
import { useDispatch } from "react-redux";
// import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  submitForm,
  submitFormSuccess,
  submitFormFailure,
} from "../musics/addMusicSlice";
import { useLocation } from "react-router-dom";
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 350px;
  max-width: 90%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  text-align: center;
  height: 280px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 8px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const ModalInput = styled.input`
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  border-color: ${primaryColor};
`;

const ModalButton = styled.button`
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

const AddNewMusic = styled.button`
  width: 130px;
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
const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
`;
const Modal = () => {
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [gener, setGener] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitForm({ title, album, artist, gener }));
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <>
      <AddNewMusic onClick={() => setIsOpen(true)}>Add Music</AddNewMusic>
      {isOpen && (
        <ModalBackground onClick={() => setIsOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
            <ModalForm onSubmit={handleSubmit}>
              <ModalInput
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
              <ModalInput
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={(event) => setArtist(event.target.value)}
                required
              />
              <ModalInput
                type="text"
                placeholder="Album"
                value={album}
                onChange={(event) => setAlbum(event.target.value)}
                required
              />
              <ModalInput
                type="text"
                placeholder="Genre"
                value={gener}
                onChange={(event) => setGener(event.target.value)}
                required
              />
              <ActionButtons>
                <ModalButton type="submit">Add</ModalButton>
                <ModalButton onClick={() => setIsOpen(false)}>
                  Cancel
                </ModalButton>
              </ActionButtons>
            </ModalForm>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
