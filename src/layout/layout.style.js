import styled from "styled-components";

export const LayoutMain = styled.div`
    display: ${(props) => props?.mainStyle?.display};
    grid-template-columns ${(props) => props?.mainStyle?.gridTemp};
`

export const LayoutInside = styled.div`
    dispaly: ${(props) => props?.insideStyle?.display};
    gap: ${(props) => props?.insideStyle?.gap};
    flex-direction: ${(props) => props?.insideStyle?.flexDirection};
    padding: ${(props) => props?.insideStyle?.padding};
`