import React from 'react'
import { Lable } from '../../nav/navbar.style'
import { Container,Parent,Stat,Title,ParentContainer } from './total.style'
import { IoIosAlbums } from "react-icons/io";
import {HiUserGroup} from "react-icons/hi"
import {GiMusicalNotes} from "react-icons/gi"
import { RiAlbumFill } from "react-icons/ri";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStasticsStart } from "../ststicsSlice";

const TotalStatstics = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStasticsStart());
  }, [dispatch]);

  const stasticsts = useSelector((state) => state.stastics.stastics
  );



    const iconStyle= {
        fontSize: "55px",

    }
  return (
    <Container>
    <Lable>Total</Lable>
    <ParentContainer>
      <Parent>
      <GiMusicalNotes style={iconStyle} />
      <Stat>{stasticsts?.songCount}</Stat>
      <Title>Songs</Title>
      </Parent>
      <Parent>
      <HiUserGroup style={iconStyle} />
      <Stat>{stasticsts?.artistCount}</Stat>
      <Title>Artists</Title>
      </Parent>
      <Parent>
      <IoIosAlbums style={iconStyle} />
      <Stat>{stasticsts?.albumCount}</Stat>
      <Title>Albums</Title>
      </Parent>
      <Parent>
      <RiAlbumFill style={iconStyle} />
      <Stat>{stasticsts?.genreCount}</Stat>
      <Title>Genres</Title>
      </Parent>
      </ParentContainer>
    </Container>
  )
}

export default TotalStatstics