import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayTwelve.scss';
import Map from './Map';

interface IDayTwelveProps {
}

const DayTwelve : React.FC<IDayTwelveProps> = props => {
    const introText = <p><Text english="" french="" /></p>;
    const detailsMorning = <p>
        <Text english="" french="" />
        <b><Text english="" french="" /></b>
        <Text english="" french="" />
    </p>
    const detailsAfternoon = <div>
        <p>
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
        </p>
    </div>
    const detailsUseful = <div>
        
    </div>

    return(
        <div className={`day-twelve`}>
            <Day dayNumber={12}
                 introEnglishTitle="" introFrenchTitle=""
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={""} programFrenchMorning={""} 
                 programEnglishAfternoon={""} programFrenchAfternoon={""}
            />
        </div>
    );
}

export default DayTwelve;