import React from 'react';
import Text from '../../LocalisationContext/Text';
import './Program.scss';

interface IProgramProps {
    isFullDay : boolean;
    englishMorning : string;
    frenchMorning : string;
    englishAfternoon : string;
    frenchAfternoon : string;
}

const Program : React.FC<IProgramProps> = props => {
    return(
        <div className={`program`}>
            {props.isFullDay && 
            <div className={`program-full-day`}>
                <p>
                    <Text english="The program of the day is " french="Le programme de la journée est " />
                    <Text english={props.englishMorning} french={props.frenchMorning} />
                </p>
            </div>}
            {!props.isFullDay && 
            <div className={`program-half-days`}>
                <p><Text english="The program of the day is :" french="Le programme de la journée est :" /></p>
                <div className={`am`}>
                    <img src='./icons/am.png'/>
                    <p><Text english={props.englishMorning} french={props.frenchMorning} /></p>
                </div>
                <div className={`pm`}>
                    <img src='./icons/pm.png'/>
                    <p><Text english={props.englishAfternoon} french={props.frenchAfternoon} /></p>
                </div>
            </div>}
        </div>
    );
}

export default Program;