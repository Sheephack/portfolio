import { StyledDivisor } from "./styles/Divisor.styled"

interface Props{
    class: string;
}

const Divisor = (props:Props) => {
  return (
    <StyledDivisor>
        <svg xmlns='http://www.3g.org/2000/svg' version='1.1' width="100%" height="75" viewBox='0 0 100 102' preserveAspectRatio='none'>
            <path className={props.class} d="M0 0 L50 100 L100 0 Z"></path>
        </svg>
    </StyledDivisor>
  )
}

export default Divisor;