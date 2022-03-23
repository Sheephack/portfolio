// @ts-checker
import {StyledSidebar} from './styles/Sidebar.styled';

function Sidebar(): JSX.Element{
    return(
        <StyledSidebar>
            <div className="sideBar__imgContainer">
                <img src="" alt="" />
            </div>
            <nav className="sideBar__navBar">
                <ul>
                    <li>About</li>
                    <li>About</li>
                    <li>Proyects</li>
                    <li>GitHub</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </StyledSidebar>
    );
};

export default Sidebar;