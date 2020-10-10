import React, { useState } from 'react';
import Text from '../LocalisationContext/Text';
import SectionHeader from '../SectionHeader/SectionHeader';
import './ItineraryNutshell.scss';
import ItinerarySwitch from './ItinerarySwitch';
import ItineraryTable from './Table/ItineraryTable';

interface IItineraryNutshellProps {
}

const ItineraryNutshell : React.FC<IItineraryNutshellProps> = props => {
    const [iconText, setIconText] = useState("text");
    var positionClassname = iconText == "icon" ? "icon" : "";

    return(
        <div className={`itinerary-nutshell`} id={`itinerary-nutshell`}>
            <SectionHeader englishTitle="The itinerary" englishSubtitle="in a nutshell" frenchTitle="L'itinéraire" frenchSubtitle="en un clin d oeil" />
            <ItinerarySwitch setIconText={setIconText} positionClassname={positionClassname} />
            <ItineraryTable positionClassname={positionClassname}/>
        </div>
    );
}

export default ItineraryNutshell;