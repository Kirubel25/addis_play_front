import React from "react";
import { Lable } from "../../nav/navbar.style";
import {ImUser} from "react-icons/im"
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
} from "./artists.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStasticsStart } from "../ststicsSlice";

const ArtistsStatstics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStasticsStart());
  }, [dispatch]);

  const stasticsts = useSelector((state) => state.stastics.stastics
  );




    let songCount = Object.keys(stasticsts?.artistCounts || {}).map((artist) => ({
      artist,
      songCount: stasticsts.artistCounts[artist]
    }));

  return (
    <Container>
      <Lable>Artists</Lable>
      <ParentContainer>
        {
          songCount.map((element,index) => (
            <Parent key={index}>
              <Artist>
                <ImUser style={{fontSize:"40px"}}/>
                <Title>{element.artist}</Title>
              </Artist>
              <ArtistData>
                <Songs>
                  <Stat>{element.songCount}</Stat>
                  <Title>Songs</Title>
                </Songs>
                <Albums>
                  <Stat></Stat>
                  <Title></Title>
                </Albums>
              </ArtistData>
            </Parent>
          ))
         
        }
      </ParentContainer>
    </Container>
  );
};

export default ArtistsStatstics;
