// @ts-check
import {StyledHeader} from './styles/Header.styled';

function Header (): JSX.Element {
    return (
        <StyledHeader>
            <div>
                <label htmlFor="nightDayToggler"><span>Dia/Noche</span></label>
                <input type="checkbox" id="nightDayToggler"/>
            </div>
            <div>
                <label htmlFor="languageToggler"><span>Lenguaje</span></label>
                <input type="checkbox" id="languageToggler"/>
            </div>
        </StyledHeader>
    )
}

export default Header