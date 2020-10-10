import React from 'react';
import Text from '../LocalisationContext/Text';
import './DayHeader.scss';

interface IDayHeaderProps {
    activeNumber : number;
    setActiveNumber : (activeNumber : number) => void;
}

const DayHeader : React.FC<IDayHeaderProps> = props => {
    const activeClassname = (number : number) => {
        if (number == props.activeNumber) {
            return "active";
        }
        return "";
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
            {renderDayNumbers()}
        </div>
    );
}

export default DayHeader;