import Divisor from './Divisor';
import { StyledPortfolioSection } from './styles/PortfolioSection.styled';

type Props = {}

const PortfolioSection = (props: Props) => {
  return (
    <StyledPortfolioSection id='portfolioSection'>
      <Divisor class="cityDiv"/>
      
    </StyledPortfolioSection>
  )
}

export default PortfolioSection;