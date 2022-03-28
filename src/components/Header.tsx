// @ts-check
import {StyledHeader} from './styles/Header.styled';
import Toggle from './Toggle';

interface HeaderProps {
    theme: any;
    toggleTheme: any;
  }


function Header ( props:HeaderProps ): JSX.Element {

    return (
        <StyledHeader id="top">
            <div>
                <Toggle onClick={() => props.toggleTheme } theme={props.theme} toggleTheme={props.toggleTheme} />
            </div>
            <div>
                <label htmlFor="languageToggler"><span>Lenguaje</span></label>
                <input type="checkbox" id="languageToggler"/>
            </div>
        </StyledHeader>
    )
}

export default Header