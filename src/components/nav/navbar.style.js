import styled from "styled-components";

export const primaryColor = "#24cec8";
export const secondaryColor = "#fa8937";
export const borderColor = "#ececec";

export const Container = styled.div`
  display: ${(props) => props?.style?.display && props?.style?.display};
  flex-direction: ${(props) =>
    props?.style?.flexDirection && props?.style?.flexDirection};
  width: ${(props) => props?.style?.width && props?.style?.width};
  height: ${(props) => props?.style?.height && props?.style?.height};
  margin-top: ${(props) => props?.style?.top && props?.style?.top};
  box-shadow: ${(props) => props?.style?.boxShadow && props?.style?.boxShadow};
  background-color: ${(props) =>
    props?.style?.backgroundColor === "borderColor" ? borderColor : "#fff"};
    position: ${(props) => props?.style?.position && props?.style?.position};
    justify-content ${(props)=>props?.style?.justify}
`;

export const ActionsContainer = styled.div`
display:flex;
font-size:24px;
color:${primaryColor};
gap:15px;

`
export const SearchContainer = styled.div`
width: 500px;
display: flex;
height: 50px;
background-color: #fff;
justify: space-between;
position: relative;
`
export const Lable = styled.span`
  font-size: 20px;
  font-weight: 700;
  background-image: linear-gradient(45deg, ${primaryColor}, ${secondaryColor});
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 95px;
`;
export const NavContainer = styled.ul`
  list-style: none;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavList = styled.li`
  display: flex;
  justify-content: start;
  padding-left: 30px;
  gap: 10px;
  align-items: center;
  border: 1px solid ${primaryColor};
  color: ${secondaryColor};
  background-color: ${(props)=> props?.music === true ?  primaryColor :""  };

  width: 150px;
  height: 30px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: default;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }
`;

export const SearchBar = styled.input`
  type: ${(props) => props?.searchStyle?.type};
  width: ${(props) => props?.searchStyle?.width};
  height: ${(props) => props?.searchStyle?.height};
  border-radius: ${(props) => props?.searchStyle?.borderRadius};
  padding-left: 35px;
  ::placeholder {
    color: #909090;
  },
  &:active {
    border: 1px solid ${primaryColor};
    outline: none;
  }
`;
