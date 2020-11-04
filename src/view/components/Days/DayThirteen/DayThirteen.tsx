import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayThirteen.scss';
import Map from './Map';

interface IDayThirteenProps {
}

const DayThirteen : React.FC<IDayThirteenProps> = props => {
    const introText = 
    <p>
        <Text english="" french="" />
    </p>;
    const detailsMorning = 
    <p>
        <Text english="It takes about " french="Il faut environ " />
        <b><Text english="2 hours" french="2 heures" /></b>
        <Text english=" to reach Porto from Calvi by the road D81, which passes through Calvi airport. From the Frango Valley, the road is " french=" pour rejoindre Porto à partir de Calvi par la D81, qui passe par l'aéroport de Calvi. À partir de la vallée de Frango, la route est " />
        <b><Text english="very winding" french="très sineuse" /></b>
        <Text english="." french="." />
    </p>
    const detailsAfternoon = <div>
        <p>
            <Text english="The " french="La " />
            <b><Text english="Nature Reserve of Scandola" french="Réserve Naturelle de Scandola" /></b>
            <Text english=" is a maritime and terrestrial territory to which access is strictly regulated. It is registered with the world heritage of Unesco. It is not possible to go by car and only a handful of people are allowed to walk there, so the only way to see it is by " french=" est un territoire maritime et terrestre dont l'accès est strictement réglementé. Elle est inscrite au patrimoine mondial de l'Unesco. Il est impossible d'y aller en voiture et seule une poignée de personnes ont le droit de s'y rendre à pied, alors le seul moyen de la voir est en " />
            <b><Text english="boat" french="bateau" /></b>
            <Text english="." french=". " />
            <br></br>
            <Text english="Along the way, the boat stops at the small fishing village of " french="En chemin, le bateau fait un arrêt au petit village de pêcheurs de " />
            <b><Text english="Girolata" french="Girolata" /></b>
            <Text english=", where there are a few bars and restaurants. On the beach, many cows roam freely. Going up the only street to the " french=", où se trouvent quelques bars et restaurants. Sur la plage, de nombreuses vaches vagabondent librement. En remontant l'unique rue vers la " />
            <a href="https://goo.gl/maps/1ngQ6uwjdx3fZMyq9" target='_blank'><Text english="Genoese tower" french="tour génoise" /></a>
            <Text english=", you can admire " french=", vous pouvez admirer " />
            <a href="https://goo.gl/maps/niRPmEqMCbEVFncP9" target='_blank'><Text english="the view" french="la vue" /></a>
            <Text english=" of the golfe." french=" sur le golf." />
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
        </p>
    </div>
    const detailsUseful = <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/MHQU1wqCQPcy1z6S7" target='_blank'><Text english="2h drive from Calvi to Porto" french="2h de route de Calvi à Porto" /></a>
        </p>
        <br></br>
        <br></br>
        <img src="./icons/parking.png"></img>
        <p>
            <a href="https://goo.gl/maps/wnmMhNhsmWRBZdxi6" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" everywhere in the city center of Porto despite the old parking meters. Park along the road when entering the city center" french=" partout dans le centre ville de Porto malgré la présence des anciens horodateurs. Se garer le long de la route en arrivant dans le centre ville." />
        </p>
        <a href="https://goo.gl/maps/wnmMhNhsmWRBZdxi6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
    </div>

    return(
        <div className={`day-thirteen`}>
            <Day dayNumber={13}
                 introEnglishTitle="" introFrenchTitle=""
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"road to Porto"} programFrenchMorning={"route jusqu'à Porto"} 
                 programEnglishAfternoon={"cruise in the Natural Reserve of Scandola and Girolata"} programFrenchAfternoon={"promenade en mer dans la réserve naturelle de Scandola et Girolata"}
            />
        </div>
    );
}

export default DayThirteen;