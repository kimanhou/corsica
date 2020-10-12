import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayTwo.scss';

interface IDayTwoProps {
}

const DayTwo : React.FC<IDayTwoProps> = props => {
    const detailsMorning = <p>
        <Text english="" french="" />
        <b><Text english="Sartene" french="Sartene" /></b>
        <Text english="" french="" />
    </p>
    const detailsAfternoon = <div>
        <p>
            <b><Text english="Roccapina" french="Roccapina" /></b>
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
        <div className={`day-two`}>
            <Day dayNumber={2} 
                 introEnglishTitle="Sartene and Roccapina" introFrenchTitle="Sartene et Roccapina"
                 introEnglishText="" introFrenchText="Le plus Corse des villages Corses."
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"visit of Sartene old town"} programFrenchMorning={"visite du centre ville de Sartène"} 
                 programEnglishAfternoon={"beach time and optional hike on Roccapina beach"} programFrenchAfternoon={"plage de Roccapina et randonnée possible"}
            />
        </div>
    );
}

export default DayTwo;