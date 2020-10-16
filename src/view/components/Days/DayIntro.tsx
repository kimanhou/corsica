import React from 'react';
import Text from '../LocalisationContext/Text';
import './DayIntro.scss';
import Program from './Program/Program';

interface IDayIntroProps {
    englishTitle : string;
    frenchTitle : string;
    text : React.ReactNode;
    isFullDay : boolean;
    programEnglishMorning : string;
    programFrenchMorning : string;
    programEnglishAfternoon : string;
    programFrenchAfternoon : string;
    map : React.ReactNode;
}

const DayIntro : React.FC<IDayIntroProps> = props => {
    return(
        <div className={`day-intro`}>
            <div className={`day-intro-map`}>
                {props.map}
            </div>
            <div className={`day-intro-text`}>
                <h2><Text english={props.englishTitle} french={props.frenchTitle} /></h2>
                {props.text}
                <Program isFullDay={props.isFullDay} englishMorning={props.programEnglishMorning} frenchMorning={props.programFrenchMorning} englishAfternoon={props.programEnglishAfternoon} frenchAfternoon={props.programFrenchAfternoon}/>
            </div>
        </div>
    );
}

export default DayIntro;