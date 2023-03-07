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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-top: 40px;
`;
export const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primaryColor};
`;

export const Stat = styled.span`
  color: #aeb8c9;
  font-size: 24px;
  font-weight: 600;
`;
export const Title = styled.span`
  color: #aeb8c9;
  font-size: 16px;
  font-weight: 600;
`;
