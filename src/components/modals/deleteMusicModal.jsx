import React from "react";
import styled from "styled-components";
import { ActionButton } from "../musics/musiclist.style";
import { useState } from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteFileStart,
  deleteFileSuccess,
  deleteFileFailure,
} from "../musics/deleteSlice";
import { primaryColor, secondaryColor } from "../nav/navbar.style";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  width: 400px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
`;

const ModalText = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
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
const ConfirmButton = styled(Button)`
  background-color: #ff5e5e;
  color: #ffffff;
`;

const CancelButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333333;
`;

const DeleteConfirmationModal = ({ music }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  
  const handleConfirm = (event) => {
    event.preventDefault();
    dispatch(deleteFileStart(music));
    setShow(false);
    window.location.reload();
  };
  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <ActionButton onClick={handleOpen}>
        <MdOutlineDeleteOutline />
      </ActionButton>
      {show && (
        <ModalWrapper onClick={handleClose}>
          <ModalContent onClick={(e)=>e.stopPropagation()}>
            <ModalTitle>Confirm Deletion</ModalTitle>
            <ButtonWrapper>
              <ModalButton onClick={handleClose}>Cancel</ModalButton>
              <ModalButton onClick={handleConfirm}>Delete</ModalButton>
            </ButtonWrapper>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default DeleteConfirmationModal;
