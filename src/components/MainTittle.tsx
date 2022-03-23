//@ts-check
import portrait from '../assets/img/mainTittle_img.jpg'
import { StyledMainTittle } from './styles/MainTittle.styled';

function MainTittle(): JSX.Element{
    return(
        <StyledMainTittle>
            <div className='mainTittle__tittleContainer'>
                <h1>Hola, soy <span>Matias</span> desarrollador Front end</h1>
            </div>
            <img className='mainTittle__img' src={portrait} alt="" />
        </StyledMainTittle>
    );
};

export default MainTittle;