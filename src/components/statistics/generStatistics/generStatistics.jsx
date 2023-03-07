import React from "react";
import { Lable } from "../../nav/navbar.style";
import { RiAlbumFill } from "react-icons/ri";

import {
  Albums,
  Artist,
  ArtistData,
  Container,
  Parent,
  ParentContainer,
  Songs,
  Stat,
  Title,
} from "./gener.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStasticsStart } from "../ststicsSlice";

const GenerStatstics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStasticsStart());
  }, [dispatch]);

  const stasticsts = useSelector((state) => state.stastics.stastics);

  

  let genreCount = Object.keys(stasticsts?.genreCounts || {}).map((genre) => ({
    genre,
    genreCount: stasticsts.genreCounts[genre],
  }));

  
  return (
    <Container>
      <Lable>Geners</Lable>
      <ParentContainer>
        {
        genreCount.map((element, index) => (
          <Parent key={index}>
            <Artist>
              <RiAlbumFill style={{ fontSize: "40px" }} />
              <Title>{element.genre}</Title>
            </Artist>
            <ArtistData>
              <Songs>
                <Stat>{element.genreCount}</Stat>
                <Title>Songs</Title>
              </Songs>
            </ArtistData>
          </Parent>
        ))
        }
      </ParentContainer>
    </Container>
  );
};

export default GenerStatstics;
