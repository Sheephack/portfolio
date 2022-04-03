//@ts-check
import portrait from '../assets/img/profilePicture2.png';
import portraitDark from '../assets/img/profilePictureDark.png';
import { StyledMainTittle } from './styles/MainTittle.styled'
import { useCallback, useEffect, useState} from 'react';
import InfoSection from './InfoSection';
import PortfolioSection from './PortfolioSection';
import Divisor from './Divisor';

interface MTittle {
    theme: any;
  }

function MainTittle(props:MTittle): JSX.Element{
    const names:string[] = ['Matias', 'Sheephack'];
    const [newName, setnewName] = useState("Sheephack");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return(
        <>
        <StyledMainTittle id='mainTittle_link'>
            <div className='mainTittle__tittleContainer'>
                <h1>Hola, soy <span className='glitch' data-text={newName}>{newName}</span> desarrollador Front end</h1>
            </div>
            { props.theme === 'light' ? <img src={portraitDark} alt="Foto de Matias" /> : <img src={portrait} alt="Foto de Matias" /> }
        </StyledMainTittle>
        <Divisor class="mainDiv"/>
        <InfoSection />
        <PortfolioSection />
        </>
    );
};

export default MainTittle;


