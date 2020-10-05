import React from 'react';
import Text from '../LocalisationContext/Text';
import './Itinerary.scss';

interface IItineraryProps {
}

const Itinerary : React.FC<IItineraryProps> = props => {
    return(
        <div className={`itinerary`}>
            This is the itinerary page.
        </div>
    );
}

export default Itinerary;