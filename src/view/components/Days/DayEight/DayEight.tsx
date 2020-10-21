import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayEight.scss';
import Map from './Map';

interface IDayEightProps {
}

const DayEight : React.FC<IDayEightProps> = props => {
    const introText = 
    <p>
        <Text english="A hike that starts directly from the city center of Corte! More accessible and with less hills, this walk will take you to " french="Une randonnée qui part directement du centre ville de Corte ! Plus accessible et avec moins de dénivelé, cette balade vous permettra de vous conduira jusqu'à la " />
        <b><Text english="Rossolino Bridge" french="passerelle de Rossolino" /></b>
        <Text english=", where you will be able to swim, in water certainly very cold. This trail is also (and weirdly) much less traveled than the one leading to Lake Melo in the Restonica Valley. It is also completely free!" french=", où vous pourrez vous baigner, dans une eau certes très froide. Ce sentier est également (et biazrrement) beaucoup moins fréquenté que celui menant au lac de Melo dans la vallée de la Restonica. Il est aussi totalement gratuit !" />
    </p>;
    const detailsMorning = 
    <div>
        <p>
            <Text english="From the " french="À partir du  " />
            <a href="https://goo.gl/maps/PSLiSMKi4wS6Aqbr5" target='_blank'><b><Text english="starting point" french="point de départ" /></b></a>
            <Text english=" of the hike, follow the sign" french=" de la randonnée, suivre les panneaux " />
            <i><Text english="" french="« Ponte di u Russulinu / Refuge de la Sega »" /></i>
            <Text english=". The markup is orange." french=". Le balisage est orange." />
            <br></br>
            <Text english="It takes between 2h and 2h30 to get to " french="Il faut compter entre 2 heures et 2h30 de marche pour atteindre la " />
            <a href="https://goo.gl/maps/Mq5TscoRL2GEHneTA" target='_blank'><b><Text english="Rossolino Bridge" french="passerelle de Rossolino" /></b></a>
            <Text english=". The path simply runs along the river below, offering magnificent views over the valley. This hike does not present any particular difficulty, you go up slowly without encountering big climbs." french=". Le sentier longe tout simplement le fleuve en contre bas, offrant de magnifiques vues sur la vallée. Cette randonnée ne présente aucune difficulté particulière, on monte tranquillement sans rencontrer de gros dénivelés." />
            <br></br>
            <Text english="Once at the bridge, there is a pebble beach located just below, that allows you to enjoy a cool swim. It is also a very nice place to have a picnic." french="Une fois arrivé à la passerelle, une plage de galets située juste en dessous permet de profiter d'une baignade bien fraîche. C'est également un très bel endroit pour pique-niquer." />
            <br></br>
            <Text english="If you want to go further, the " french="Pour ceux qui veulent aller plus loin, le " />
            <a href="https://goo.gl/maps/7sjL5GY8uC84xxh58" target='_blank'><Text english="Sega refuge" french="refuge de la Sega" /></a>
            <Text english=" is a 2 hour walk from Rossolino footbridge." french=" se trouve à 2h de marche de la passerelle de Rossolino." />
            <br></br>
            <Text english="The return is made by the same path. Walking very fast, it took us 1h45 from Rossolino Bridge to the starting point of the hike." french="Le retour se fait par le même chemin. En marchant très vite, nous avons mis 1h45 de la passerelle de Rossolino au point de départ de la randonnée." />
            <br></br>
            <Text english="If you don't want to go back the same way, it is also possible to make a loop through " french="Si vous ne voulez pas reprendre le même chemin, il est possible de faire une boucle par la " />
            <a href="https://goo.gl/maps/WPcEAUQz8UhfBT7N8" target='_blank'><i><Text english="Bergerie de Conia" french="Bergerie de Conia" /></i></a>
            <Text english=" (Conia sheephold) and " french=" et " />
            <a href="https://goo.gl/maps/hyVoUUBsgXoGp6266" target='_blank'><Text english="the Arch (" french="l'Arche de Corte (" />
            <i><Text english="Arcu di u Scandulaghiu" french="Arcu di u Scandulaghiu" /></i></a>
            <Text english=") but it's way longer (about 5h30 for the return leg)." french=") mais c'est beaucoup plus long (environ 5h30 pour ce trajet de retour)." />
        </p>
        <IconAndText englishText="0 min from Corte" frenchText="0 min depuis le centre de Corte" iconSrc="./icons/car.png"/>
        <IconAndText englishText="0€" frenchText="0€" iconSrc="./icons/parking.png"/>
        <IconAndText englishText="4h30 return trip to Rossolino Bridge (outbound 2h30, inbound 2h)" frenchText="4h30 A/R jusqu'à la passerelle de Rossolino (2h30 aller, 2h retour)" iconSrc="./icons/hike.png"/>
    </div>
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
        <a href="https://goo.gl/maps/PSLiSMKi4wS6Aqbr5" target='_blank'><img src="./icons/parking.png"></img></a>
        <p>
            <a href="https://goo.gl/maps/PSLiSMKi4wS6Aqbr5" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" at the starting point of the hike. Unfortunately, there are only 4 parking spots." french=" au point de départ de la randonnée. Malheureusement, il n'y a que 4 places." />
        </p>
        <a href="https://goo.gl/maps/PSLiSMKi4wS6Aqbr5" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <Text english="If you can't park there, the " french="S'il n'y a plus de place, le " />
            <a href="https://goo.gl/maps/iKzVJPQwzdPiwvkf8" target='_blank'><b><Text english="university car park" french="parking de l'université" /></b></a>
            <Text english=" is a good option : it's free and 15 min walk away, however you will have to climb some stairs !" french=" est une bonne option de secours. Il est gratuit et situé à 15 min de marche, mais il faut monter !" />
        </p>
        <a href="https://goo.gl/maps/iKzVJPQwzdPiwvkf8" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <a href="https://www.visorando.com/randonnee-gorges-du-tavignano-et-la-passerelle-de-/" target='_blank'><img src="./icons/hike.png"></img></a>
        <p>
            <a href="https://www.visorando.com/randonnee-gorges-du-tavignano-et-la-passerelle-de-/" target='_blank'><b><Text english="Visorando link" french="Lien Visorando" /></b></a>
            <Text english=" of the hike" french=" de la randonnée" />
        </p>
        <br></br>
        <br></br>
        <p>
            <b><Text english="Altitudes : " french="Les altitudes :" /></b>
            <br></br>
            <Text english="399m - University car park" french="399m - Parking de l'université" />
            <br></br>
            <Text english="454m - Starting point of the hike" french="454m - Point de départ de la randonnée" />
            <br></br>
            <Text english="781m - Rossolino Bridge" french="781m - Passerelle de Rossolino" />
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
                 programEnglishMorning={"to discover the Tavignano gorges by getting to Rossolino Bridge."} programFrenchMorning={"de découvrir les gorges du Tavignano en allant jusqu'à la passerelle de Rossolino."} 
                 programEnglishAfternoon={""} programFrenchAfternoon={""}
            />
        </div>
    );
}

export default DayEight;