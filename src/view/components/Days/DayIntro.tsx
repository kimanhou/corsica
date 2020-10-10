import React from 'react';
import Text from '../LocalisationContext/Text';
import './DayIntro.scss';
import Program from './Program/Program';

interface IDayIntroProps {
    englishTitle : string;
    frenchTitle : string;
    englishText : string;
    frenchText : string;
    isFullDay : boolean;
}

const DayIntro : React.FC<IDayIntroProps> = props => {
    return(
        <div className={`day-intro`}>
            <div className={`day-intro-map`}></div>
            <div className={`day-intro-text`}>
                <h2><Text english={props.englishTitle} french={props.frenchTitle} /></h2>
                <p><Text english={props.englishText} french={props.frenchText} /></p>
                <p><Text english="The program of the day is :" french="Le programme de la journée est :" /></p>
                <Program isFullDay={props.isFullDay} englishMorning="visit of Ajaccio old town" frenchMorning="visite du centre ville d'Ajaccio" englishAfternoon="short hike on Parata Peninsula to admire the Blood Islands" frenchAfternoon="petite randonnée sur la presqu'île de la Parata pour admirer les Îles Sanguinaires"/>
            </div>
        </div>
    );
}

export default DayIntro;