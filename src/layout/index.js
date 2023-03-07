import React from "react";
import SideNav from "../components/nav/SideNav";
import NavBar from "../components/nav/NavBar";
import { LayoutInside, LayoutMain } from "./layout.style";

const Layout = (props) => {
    const mainStyle = {
        display: "grid",
        gridTemp: "20% 79%"
    }

    const insideStyle = {
        display:"flex",
        flexDirection: "column",
        gap: "15px",
        padding: "25px",
    }
  return (
    <LayoutMain mainStyle={mainStyle}>
      <SideNav />
      <LayoutInside
        insideStyle={insideStyle}
      >
        <NavBar />
        {props?.children}
      </LayoutInside>
    </LayoutMain>
  );
};

export default Layout;
