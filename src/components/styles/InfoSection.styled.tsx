import styled from "styled-components";

export const StyledInfoSection = styled.div`
    height: 100vh;
    width: 100%;
    background: ${({ theme }) => theme.sky};
    color: #ffffff;
    transition: all 1s linear;
    display: flex;
    justify-content: center;
    align-items: center;

    .aboutContainer {
        border-radius: 50px;
        width: 70%;
        height: 70%;
        background-color: rgba(255, 255, 255, 0.2);
    }

`