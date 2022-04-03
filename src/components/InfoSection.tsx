//@ts-check
import { StyledInfoSection } from "./styles/InfoSection.styled";
import layer1 from "../assets/img/building_layer1.svg";
import layer2 from "../assets/img/building_layer2.svg";
import layer3 from "../assets/img/building_layer3.svg";
import layer4 from "../assets/img/cloud_layer.svg";
import Parallax from "parallax-js"
import { useRef, useEffect } from "react";

function InfoSection(): JSX.Element{
    const sceneEl = useRef(null);
  
    useEffect(() => {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true
      })
  
      parallaxInstance.enable();
  
      return () => parallaxInstance.disable();
    }, [])

    return(
        <StyledInfoSection id="infoSection" data-relative-input="true" ref={sceneEl}>
            <div data-depth="0.1" className="layer clouds">
              <img src={layer4} alt="" />
            </div>
            <div data-depth="0.2" className="layer city1">
              <img src={layer3} alt="" />
            </div>
            <div data-depth="0.4" className="layer city2">
              <img src={layer2} alt="" />
            </div>
            <div data-depth="0.6" className="layer city3">
              <img src={layer1} alt="" />
            </div>
        </StyledInfoSection>
    );
}

export default InfoSection;