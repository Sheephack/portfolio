import styled from "styled-components";

export const StyledSidebar = styled.aside`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 1000;

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
        align-items: flex-start;
        top: 0;
        margin-right: 0.5rem;
        z-index: 100;
        padding-bottom: 100px;
        
        &__container{
            position: absolute;
            height: 20rem;
            width: 58px;
            text-align: center;
            z-index: 100020;
            
            line-height: normal;

            .navbar{
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
                .box{
                    
                    text-align: center;
                    .anchor{
                        font-size: 1.8rem;
                        position: relative;
                        transition: all 0.3s ease;
                        color: ${({ theme }) => theme.text};

                        &:hover{
                            color: ${({ theme }) => theme.accent};
                        }
                        .tooltip{
                            position: absolute;
                            top: -3px;
                            left: 45px;
                            background: ${({ theme }) => theme.body};
                            width: 95px;
                            padding: 10px;
                            border-radius: 50px;
                            border: 2px solid ${({ theme }) => theme.accent};
                            font-size: 1rem;
                            letter-spacing: 1px;
                            display: none;
                            color: ${({ theme }) => theme.text};

                            &:before{
                                content:"";
                                position: absolute;
                                top: 10px;
                                left: -14%;
                                border-top: 8px solid transparent;
                                border-bottom: 8px solid transparent;
                                border-left: 8px solid transparent;
                                border-right: 8px solid ${({ theme }) => theme.accent};
                            }
                        }

                        &:hover .tooltip{
                            display: block;
                        }

                    }
                }
            }
        }
        
    }

`