// @ts-checker
import {StyledSidebar} from './styles/Sidebar.styled';
import {FaGithub, FaLinkedinIn, FaHome, FaUser} from 'react-icons/fa';
import { GiSheep } from 'react-icons/gi'
import { HashLink } from 'react-router-hash-link';



function Sidebar(): JSX.Element{
    return(
        <StyledSidebar>
            <div className="sideBar__imgContainer">
                <img src="" alt="" />
            </div>
            <div className="sideBar__navBar">
                <div className='sideBar__navBar__container'>
                    <nav className='navbar'>
                        <div className="box">
                            <HashLink to="#top" className="anchor">
                                <i><FaHome /></i>
                                <div className='tooltip'>Ir arriba</div>
                            </HashLink>
                        </div>
                        <div className="box">
                            <HashLink to="#infoSection" className="anchor">
                                <i><FaUser /></i>
                                <div className='tooltip'>Acerca de</div>
                            </HashLink>
                        </div>
                        <div className="box">
                            <div className="anchor">
                                <i><GiSheep /></i>
                                <div className='tooltip'>Portfolio</div>
                            </div>
                        </div>
                        <div className="box">
                            <a href="https://www.linkedin.com/in/matiaspalladino/" className='anchor'>
                                <i><FaLinkedinIn /></i>
                                <div className='tooltip'>Linkedin</div>
                            </a>
                        </div>
                        <div className="box">
                            <a href="https://github.com/Sheephack" className='anchor'>
                                <i><FaGithub /></i>
                                <div className='tooltip'>GitHub</div>
                            </a>
                        </div>
                        
                    </nav>
                </div>
            </div>
        </StyledSidebar>
    );
};

export default Sidebar;