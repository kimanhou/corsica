import React, { useState } from 'react';
import Text from '../LocalisationContext/Text';
import './ItinerarySwitch.scss';

interface IItinerarySwitchProps {
    positionClassname : string;
    setIconText : (iconText : string) => void;
}

const ItinerarySwitch : React.FC<IItinerarySwitchProps> = props => {
    return(
        <div className={`switch`}>
            <p onClick={() => props.setIconText("icon")}><Text english="Icons" french="Icônes" /></p>
            <div className={`bar-circle`}>
                <div className={`bar`}></div>
                <div className={`circle ${props.positionClassname}`}></div>
            </div>
            <p onClick={() => props.setIconText("text")}><Text english="Text" french="Texte" /></p>
        </div>
    );
}

export default ItinerarySwitch;