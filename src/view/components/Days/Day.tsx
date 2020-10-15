import React from 'react';
import './Day.scss';
import DayDetails from './DayDetails';
import DayHeader from './DayHeader';
import DayIntro from './DayIntro';
import DayPhotos from './DayPhotos';

interface IDayProps {
    dayNumber : number;
    introEnglishTitle : string;
    introFrenchTitle : string;
    introText : React.ReactNode;
    introMap : React.ReactNode;
    isFullDay : boolean;
    programEnglishMorning : string;
    programFrenchMorning : string;
    programEnglishAfternoon : string;
    programFrenchAfternoon : string;
    detailsMorning : React.ReactNode;
    detailsAfternoon : React.ReactNode;
    detailsUseful : React.ReactNode;
}

const Day : React.FC<IDayProps> = props => {
    return(
        <div className={`day`}>
            <DayIntro isFullDay={props.isFullDay} 
                      englishTitle={props.introEnglishTitle} 
                      frenchTitle={props.introFrenchTitle} 
                      text={props.introText}
                      programEnglishMorning={props.programEnglishMorning} programFrenchMorning={props.programFrenchMorning} 
                      programEnglishAfternoon={props.programEnglishAfternoon} programFrenchAfternoon={props.programFrenchAfternoon}
                      map={props.introMap} />
            <DayDetails isFullDay={props.isFullDay} morning={props.detailsMorning} afternoon={props.detailsAfternoon} useful={props.detailsUseful}/>
            <DayPhotos />
        </div>
    );
}

export default Day;