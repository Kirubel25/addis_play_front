import styled from "styled-components";
import { primaryColor, secondaryColor } from "../nav/navbar.style";

export const GenerContainer = styled.div`
display: flex;
flex-direction:column;
padding: 15px;
padding-top:5px;
border: 1px solid #ececec;
border-radius: 5px;
height: 20vh;
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
margin-top: 20px;
`

export const GenerList = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
height:80%;
gap:10px;
padding-top:5px;
`

export const GenerCard = styled.div`
display:flex;
flex-direction:column;
// justify-content:start;
align-items:start;
text-align:center;
color:${secondaryColor};
// height:100%;
// width:150px;
// border-radius:50%;
// box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
// background-color:#ececec;
`

export const GenerTitle = styled.span`
font-weight:600;
color:${primaryColor};
padding-left:20px;

`