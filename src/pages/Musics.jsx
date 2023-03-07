import React from "react";
import Albums from "../components/albums/Albums";
import Gener from "../components/gener/Gener";
import MusicList from "../components/musics/MusicList";
import { Container } from "./pages.style";

const Musics = () => {
  return (
    <>
      <MusicList />
      <Container>
        <Albums />
        <Gener />
      </Container>
    </>
  );
};

export default Musics;
