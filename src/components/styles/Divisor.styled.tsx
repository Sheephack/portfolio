import styled from "styled-components";

export const StyledDivisor = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    .mainDiv{
        top: 0;
        fill: ${props => props.theme.body};
        stroke: ${props => props.theme.accent};
    }   
    .cityDiv{
        fill: ${props => props.theme.cityDiv};
        stroke: ${props => props.theme.accent};
    } 
`



