import styled from "styled-components";

export const StyledInfoSection = styled.section`
    height: 100vh;
    width: 100%;
    background: ${({ theme }) => theme.sky};
    color: #ffffff;
    transition: all 1s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .aboutContainer {
        border-radius: 50px;
        width: 70%;
        height: 70%;
        background-color: rgba(255, 255, 255, 0.2);
    }

    #infoSection {
        overflow: hidden;
    }
    .city1{
        width: 150%;
        height: 85vh;
        display: flex!important;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        left: -2%!important;
        filter: ${({ theme }) => theme.buildingBack};

        img{
            width: 130%;
            height: auto;
        }
        
    }
    .city2{
        width: 150%;
        height: 90vh;
        display: flex!important;
        flex-direction: column;
        justify-content: flex-end;
        overflow: hidden;
        filter: ${({ theme }) => theme.buildingMiddle};

        img{
            width: 130%;
            height: auto;
        }
    }
    .city3{
        width: 150%;
        height: 105vh;
        display: flex!important;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        overflow: hidden;
        left: -20%!important;
        filter: ${({ theme }) => theme.buildingFront};

        img{
            width: 130%;
            height: auto;
        }
    }
    .clouds{
        width: 150%;
        height: 90vh;
        display: flex!important;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        overflow: hidden;
        left: -1%!important;
        filter: ${({ theme }) => theme.clouds};

        img{
            width: 130%;
            height: auto;
        }
    }
`