import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../nav/navbar.style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 5px;
  border: 1px solid #ececec;
  border-radius: 5px;
  height: 35.1vh;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const ParentContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap:10px;
margin-top:15px;
`
export const Parent = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap:10px;
color:${primaryColor};
border-bottom:1px solid #ececec;
height:90px;


`

export const Stat = styled.span`
color:#aeb8c9;
font-size:24px;
font-weight:600;
`
export const Title = styled.span`
color:#aeb8c9;
font-size:16px;
font-weight:600;
`
export const Artist = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const ArtistData = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-right:1px solid #ececec;

`
export const Songs = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;

`
export const Albums = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`
