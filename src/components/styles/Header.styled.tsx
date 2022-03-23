import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 2rem;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
`
