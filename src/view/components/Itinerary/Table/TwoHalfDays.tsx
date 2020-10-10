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
}

const TwoHalfDays : React.FC<ITwoHalfDaysProps> = props => {
    return(
        <div className={`two-half-days`}>
            <HalfDay english={props.AMenglish} french={props.AMfrench} imageSrc={props.AMimageSrc} />
            <div className={`day-divider`}></div>
            <HalfDay english={props.PMenglish} french={props.PMfrench} imageSrc={props.PMimageSrc} />
        </div>
    );
}

export default TwoHalfDays;