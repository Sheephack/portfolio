import moon from '../assets/img/moon.png';
import sun from '../assets/img/sunny.png';
import {StyledToggle} from '././styles/Toggle.styled';

interface ToggleProps {
    theme: string;
    toggleTheme: any;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }


export default function Toggle(props: ToggleProps) {
    console.log(props.theme)
  return (
    <StyledToggle onClick={props.toggleTheme}>
        { props.theme === 'light' ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" /> }
    </StyledToggle>
  )
}
