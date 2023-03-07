import React, { useState } from "react";
import {
  Container,
  NavContainer,
  NavList,
  LogoContainer,
  Lable,
  borderColor,
  primaryColor,
} from "./navbar.style";
import { RxDashboard } from "react-icons/rx";
import { TbMusic } from "react-icons/tb";
import Logo from "./Logo.png";
import { NavLink, Link } from "react-router-dom";

const SideNav = () => {
  const continerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    borderRight: "1px solid #ececec",
    boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
    backgroundColor: "borderColor",
  };
  const navLinkStyle = {
    color: "#ececec",
    ":hover": {
      color: "#000",
    },
  };

  const [statstics, setStatstics] = useState(false);
  const [music, setMusic] = useState(true);

  const handleActiveLink = (name) => {
    if (name === "statstics") {
      setStatstics(true);
      setMusic(false);
    } else {
      setStatstics(false);
      setMusic(true);
    }
  };
  return (
    <Container style={continerStyle}>
      <NavContainer>
        <NavLink to={"/"} style={navLinkStyle}>
          <NavList onClick={(e) => handleActiveLink("music")} music={music}>
            <RxDashboard />
            Music
          </NavList>
        </NavLink>
        <NavLink to={"/statstics"} style={navLinkStyle}>
          <NavList onClick={(e) => handleActiveLink("statstics")} music={statstics}>
            <TbMusic />
            Statistics
          </NavList>
        </NavLink>
      </NavContainer>
      <LogoContainer>
        <img src={Logo} width="60px" />
        <Lable>Addis play</Lable>
      </LogoContainer>
    </Container>
  );
};

export default SideNav;
