import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";     
import { IoSettingsOutline  } from "react-icons/io5";     
import { Container, SearchBar, ActionsContainer,SearchContainer } from "./navbar.style";

const NavBar = () => {
  const continerStyle = {
    width: "100%",
    display: "flex",
    height: "50px",
    backgroundColor: "white",
    justify: "end",
    position: "relative",
  };
 
  return (
    <Container style={continerStyle}>
    
      <ActionsContainer>
      <IoMdNotificationsOutline/>
      <IoSettingsOutline/>
      </ActionsContainer>
    </Container>
  );
};

export default NavBar;
