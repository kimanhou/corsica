import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayThree.scss';
import Map from './Map';

interface IDayThreeProps {
}

const DayThree : React.FC<IDayThreeProps> = props => {
    const introText = <p><Text english="Bonifacio" french="Bonifacio" /></p>;
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
        <div className={`day-three`}>
            <Day dayNumber={3} 
                 introEnglishTitle="Bonifacio" introFrenchTitle="Bonifacio"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"visit of Bonifacio"} programFrenchMorning={"visite de Bonifacio"} 
                 programEnglishAfternoon={"Campu Rumanilu hike"} programFrenchAfternoon={"sentier du Campu Rumanilu"}
            />
        </div>
    );
}

export default DayThree;