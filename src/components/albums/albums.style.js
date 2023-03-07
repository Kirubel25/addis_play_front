import styled from "styled-components";
import { primaryColor, secondaryColor } from "../nav/navbar.style";

export const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 5px;
  border: 1px solid #ececec;
  border-radius: 5px;
  height: 20vh;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const AlbumsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 80%;
  gap: 10px;
  padding-top: 5px;
`;

export const AlbumCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${secondaryColor};
  height: 100%;
  width: 150px;
  border-top-left-radius: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  background-color: #ececec;
`;

export const AlbumTitle = styled.span`
  font-weight: 600;
  color: ${primaryColor};
`;



export const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #ececec;
  border-radius: 5px;
  height: 50vh;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const Lable = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${primaryColor};
`;

export const HeaderListContainer = styled.ul`
  display: flex;
  gap: 150px;
  align-items: center;
  list-style: none;
  background-color: #ececec;
  color: ${primaryColor};
  height: 30px;
`;
export const HeaderList = styled.li``;
export const List = styled.li``;

export const MusicListContainer = styled.ul`
  display: flex;
  gap: 150px;
  text-align: center;
  //   align-items: center;
  list-style: none;
  border: 1px solid #ececec;
  height: 30px;
`;
export const MusicCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableList = styled.table``;

export const TableTopHeader = styled.thead`
  // background-color: #f2f2f2;
  color: ${primaryColor};
`;

export const TableListRow = styled.tr`
  // background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 40px;
`;

export const TableListHeader = styled.th`
  text-align: left;
  padding: 8px;
`;

export const TableListData = styled.td`
  text-align: left;
  padding: 8px;
`;
export const ActionsHolder = styled.td`
  display: flex;
  justify-content:start;
  gap:15px;
  text-align: left;
  padding: 8px;
`;
export const ActionButton = styled.button`
width:25px;
height:25px;
border-radius:15px;
border:none;
display:flex;
align-items:center;
&:hover {
  color: ${secondaryColor};
}
`