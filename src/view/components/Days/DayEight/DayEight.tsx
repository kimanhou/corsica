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
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/bNLjujjpA3UJ73Ch8" target='_blank'><Text english="35 min, 16 km from Corte" french="35 min, 16 km de route depuis Corte" /></a>
        </p>
        <br></br>
        <br></br>
        <a href="https://goo.gl/maps/M8fCVAZu5W5Gtmzi9" target='_blank'><img src="./icons/parking.png"></img></a>
        <p>
            <a href="https://goo.gl/maps/M8fCVAZu5W5Gtmzi9" target='_blank'><b><Text english="Parking" french="Parking" /></b></a>
            <Text english=" of " french=" de la bergerie de Grotelle 6€ / voiture, 3€ / moto" />
            <i><Text english=" bergerie de Grotelle" french="" /></i>
            <Text english=" (Grotelle sheephold) 6€ / car, 3€ / motorcycle" french=""/>
        </p>
        <br></br>
        <br></br>
        <a href="https://www.visorando.com/randonnee-restonica-lac-melo-lac-capitello/" target='_blank'><img src="./icons/hike.png"></img></a>
        <p>
            <a href="https://www.visorando.com/randonnee-restonica-lac-melo-lac-capitello/" target='_blank'><b><Text english="Visorando link" french="Lien Visorando" /></b></a>
            <Text english=" of the hike" french=" de la randonnée" />
        </p>
        <br></br>
        <br></br>
        <p>
            <b><Text english="Altitudes : " french="Les altitudes :" /></b>
            <br></br>
            <Text english="1376m - " french="1376m - Parking de la bergerie de Grottelle" />
            <i><Text english="Bergerie de Grotelle" french="" /></i>
            <Text english=" car park" french="" />
            <br></br>
            <Text english="1499m - Former sheephold of Melo" french="1499m - Ancienne bergerie de Melo" />
            <br></br>
            <Text english="1710m - Lake Melo" french="1710m - Lac de Melo" />
            <br></br>
            <Text english="1941m - Lake Capitello" french="1941m - Lac de Capitello" />
        </p>
    </div>

    return(
        <div className={`day-eight`}>
            <Day dayNumber={8}
                 introEnglishTitle="Tavignano gorges" introFrenchTitle="Gorges du Tavignano"
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