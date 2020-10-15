import React from 'react';
import { Page } from '../../../App';
import Text from '../LocalisationContext/Text';
import './DayHeader.scss';

interface IDayHeaderProps {
    activeNumber : number;
    setActiveNumber : (activeNumber : number) => void;
    setCurrentPage : (page : Page) => void;
}

const DayHeader : React.FC<IDayHeaderProps> = props => {
    const activeClassname = (number : number) => {
        if (number == props.activeNumber) {
            return "active";
        }
        return "";
    }

    const backToItinerary = () => {
        props.setCurrentPage(Page.itinerary);
    }

    const dayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const onClick = (number : number) => {
        props.setActiveNumber(number);
    }

    const renderDayNumbers = () => {
        var myNumbers : JSX.Element[] = [];
        for(let dayNumber of dayNumbers){
            myNumbers.push(<div className={`day-header-number ${activeClassname(dayNumber)}`} key={dayNumber} onClick={() => onClick(dayNumber)}>{dayNumber}</div>)
        }
        return myNumbers;
    }

    return(
        <div className={`day-header`}>
            <div className={`back-to-itinerary`} onClick={backToItinerary}>
                <Text english="< Back to overview" french="< Retour vers l'aperçu"/>
            </div>
            {renderDayNumbers()}
        </div>
    );
}

export default DayHeader;