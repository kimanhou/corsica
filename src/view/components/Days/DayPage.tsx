import React, { useState } from 'react';
import { IContentProps } from '../../../App';
import './Day.scss';
import DayEight from './DayEight/DayEight';
import DayEleven from './DayEleven/DayEleven';
import DayFive from './DayFive/DayFive';
import DayFour from './DayFour/DayFour';
import DayFourteen from './DayFourteen/DayFourteen';
import DayHeader from './DayHeader';
import DayNine from './DayNine/DayNine';
import DayOne from './DayOne/DayOne';
import DaySeven from './DaySeven/DaySeven';
import DaySix from './DaySix/DaySix';
import DayTen from './DayTen/DayTen';
import DayThirteen from './DayThirteen/DayThirteen';
import DayThree from './DayThree/DayThree';
import DayTwelve from './DayTwelve/DayTwelve';
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

interface IDayPageProps extends IContentProps {
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
        case DayNumber.three:
            CurrentDay = DayThree;
        break;
        case DayNumber.four:
            CurrentDay = DayFour;
        break;
        case DayNumber.five:
            CurrentDay = DayFive;
        break;
        case DayNumber.six:
            CurrentDay = DaySix;
        break;
        case DayNumber.seven:
            CurrentDay = DaySeven;
        break;
        case DayNumber.eight:
            CurrentDay = DayEight;
        break;
        case DayNumber.nine:
            CurrentDay = DayNine;
        break;
        case DayNumber.ten:
            CurrentDay = DayTen;
        break;
        case DayNumber.eleven:
            CurrentDay = DayEleven;
        break;
        case DayNumber.twelve:
            CurrentDay = DayTwelve;
        break;
        case DayNumber.thirteen:
            CurrentDay = DayThirteen;
        break;
        case DayNumber.fourteen:
            CurrentDay = DayFourteen;
        break;
        default:
            CurrentDay = DayOne;
        break;
    }

    return(
        <div className={`day-page`}>
            <DayHeader activeNumber={activeNumber} setActiveNumber={setActiveNumber} setCurrentPage={props.setCurrentPage}/>
            <CurrentDay />
        </div>
    );
}

export default DayPage;