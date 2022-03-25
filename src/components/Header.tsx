// @ts-check
import {StyledHeader} from './styles/Header.styled';
import Toggle from './Toggle';

interface Header {
    theme: string;
    toggleTheme: string;
  }


function Header ({theme, toggleTheme}): JSX.Element {



    return (
        <StyledHeader>
            <div>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div>
                <label htmlFor="languageToggler"><span>Lenguaje</span></label>
                <input type="checkbox" id="languageToggler"/>
            </div>
        </StyledHeader>
    )
}

export default Header