import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayFourteen.scss';
import Map from './Map';

interface IDayFourteenProps {
}

const DayFourteen : React.FC<IDayFourteenProps> = props => {
    const introText = 
    <p>
        <Text english="" french="" />
    </p>;

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
        <div className={`day-fourteen`}>
            <Day dayNumber={14}
                 introEnglishTitle="" introFrenchTitle="Calanches de Piana et retour a Ajaccio"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={""} programFrenchMorning={"randonnée dans les calanches de Piana"} 
                 programEnglishAfternoon={""} programFrenchAfternoon={"route vers Ajaccio"}
            />
        </div>
    );
}

export default DayFourteen;