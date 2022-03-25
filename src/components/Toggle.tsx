import moon from '../assets/img/moon.png';
import sun from '../assets/img/sunny.png';
import {StyledToggle} from '././styles/Toggle.styled';

interface Toggle {
    theme: string;
    toggleTheme: string;
  }

export default function Toggle({theme, toggleTheme}) {
    console.log(theme)
  return (
    <StyledToggle onClick={toggleTheme}>
        { theme === 'light' ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" /> }
    </StyledToggle>
  )
}
