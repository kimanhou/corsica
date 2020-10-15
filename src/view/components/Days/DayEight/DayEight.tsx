import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayEight.scss';
import Map from './Map';

interface IDayEightProps {
}

const DayEight : React.FC<IDayEightProps> = props => {
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
        <div className={`day-eight`}>
            <Day dayNumber={8}
                 introEnglishTitle="" introFrenchTitle=""
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={true}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={""} programFrenchMorning={""} 
                 programEnglishAfternoon={""} programFrenchAfternoon={""}
            />
        </div>
    );
}

export default DayEight;