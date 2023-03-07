import React from "react";
import { Lable } from "../../nav/navbar.style";
import { IoIosAlbums } from "react-icons/io";

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
} from "./album.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStasticsStart } from "../ststicsSlice";

const AlbumStatstics = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchStasticsStart());
    }, [dispatch]);

    const stasticsts = useSelector((state) => state.stastics.stastics);



    let albumCount = stasticsts && Object.keys(stasticsts?.albumCounts || {}).map((album) => ({
      album,
      songCount: stasticsts.albumCounts[album]
    }));
      
      
  return (
    <Container>
      <Lable>Albums</Lable>
      <ParentContainer>
        {
          albumCount.map((element,index) => (
            <Parent key={index}>
              <Artist>
                <IoIosAlbums style={{ fontSize: "40px" }} />
                <Title>{element.album}</Title>
              </Artist>
              <ArtistData>
                <Songs>
                  <Stat>{element.songCount}</Stat>
                  <Title>Songs</Title>
                </Songs>
                <Albums>
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

export default AlbumStatstics;
