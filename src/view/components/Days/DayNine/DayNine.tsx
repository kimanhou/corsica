import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayNine.scss';
import Map from './Map';

interface IDayNineProps {
}

const DayNine : React.FC<IDayNineProps> = props => {
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
        <div className={`day-nine`}>
            <Day dayNumber={9}
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

export default DayNine;