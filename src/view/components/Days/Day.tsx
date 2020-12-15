import React from 'react';
import './Day.scss';
import DayDetails from './DayDetails';
import DayIntro from './DayIntro';
import DayPhotos from './Photos/DayPhotos';

export interface IPhotoData{
    photoName : string;
    gridItemType : string;
    isVideo ?: boolean;
}

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
    photos ?: IPhotoData[];
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
            {props.photos != null && 
                <DayPhotos photos={props.photos} dayNumber={props.dayNumber}/>
            }
        </div>
    );
}

export default Day;