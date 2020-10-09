import React from 'react';
import Text from '../LocalisationContext/Text';
import './ItinerarySectionTitle.scss';

interface IItinerarySectionTitleProps {
    english : string;
    french : string;
    onClick : () => void;
}

const ItinerarySectionTitle : React.FC<IItinerarySectionTitleProps> = props => {
    return(
        <div className={`itinerary-section-title`} onClick={props.onClick}>
            <Text english={props.english} french={props.french} />
            <div className={`underline`}></div>
        </div>
    );
}

export default ItinerarySectionTitle;