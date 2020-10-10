import React, { useState } from 'react';
import './Day.scss';
import DayHeader from './DayHeader';
import DayOne from './DayOne/DayOne';
import DayTwo from './DayTwo/DayTwo';

export enum DayNumber {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,
    six = 6,
    seven = 7,
    eight = 8,
    nine = 9,
    ten = 10,
    eleven = 11,
    twelve = 12,
    thirteen = 13,
    fourteen = 14
}

interface IDayPageProps {
}

const DayPage : React.FC<IDayPageProps> = props => {
    const [activeNumber, setActiveNumber] = useState(1);
    let CurrentDay : React.FC;
    switch (activeNumber) {
        case DayNumber.one:
            CurrentDay = DayOne;
        break;
        case DayNumber.two:
            CurrentDay = DayTwo;
        break;
        default:
            CurrentDay = DayOne;
        break;
    }

    return(
        <div className={`day-page`}>
            <DayHeader activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
            <CurrentDay />
        </div>
    );
}

export default DayPage;