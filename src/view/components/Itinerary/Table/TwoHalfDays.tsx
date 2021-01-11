import React from 'react';
import HalfDay from './HalfDay';
import './TwoHalfDays.scss';

interface ITwoHalfDaysProps {
    AMenglish : string;
    AMfrench : string;
    AMimageSrc : string;
    PMenglish : string;
    PMfrench : string;
    PMimageSrc : string;
    isMobile ?: boolean;
    lineNumber ?: number;
}

const TwoHalfDays : React.FC<ITwoHalfDaysProps> = props => {
    const isMobileClassname = props.isMobile ? 'is-mobile' : '';
    const lineNumber1 = props.lineNumber == 1 ? 'line-1' : '';
    const lineNumber2 = props.lineNumber == 2 ? 'line-2' : '';

    return(
        <div className={`two-half-days ${isMobileClassname} ${lineNumber1} ${lineNumber2}`}>
            <HalfDay english={props.AMenglish} french={props.AMfrench} imageSrc={props.AMimageSrc} isMobile={props.isMobile} lineNumber={props.lineNumber} />
            <div className={`day-divider`}></div>
            <HalfDay english={props.PMenglish} french={props.PMfrench} imageSrc={props.PMimageSrc} isMobile={props.isMobile} lineNumber={props.lineNumber} />
        </div>
    );
}

export default TwoHalfDays;