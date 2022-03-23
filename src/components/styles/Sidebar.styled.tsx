import styled from "styled-components";

export const StyledSidebar = styled.aside`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .sideBar__imgContainer{
        width: 100px;
        height: 100px;
    }

    .sideBar__navBar{
        display: flex;
        flex-direction: column;
        grid-area: nav;
        height: 100vh;
        position: sticky;
        justify-content: center;
        top: 0;
        margin-right: 0.5rem;
        z-index: 100;
        padding-bottom: 100px;
    }
`