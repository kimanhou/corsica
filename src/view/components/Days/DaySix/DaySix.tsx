import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DaySix.scss';
import Map from './Map';

interface IDaySixProps {
}

const DaySix : React.FC<IDaySixProps> = props => {
    const introText = 
    <p>
        <Text english="It is time to leave the South of Corsica to delve into the geographical and cultural heart of the island: Corte. On the way, we suggest a stop combining hiking and swimming in the natural pools of " 
              french="Il est temps de quitter le Sud de la Corse pour s'enfoncer au cœur géographique et culturel de l'île : Corte. En chemin, nous vous proposons un arrêt alliant randonnée et baignade aux " />
        <b><Text english="Purcaraccia" french="cascades de Purcaraccia" /></b>
        <Text english=". Ideally located halfway between Bonifacio and Corte, the place is very busy, even in September." french=". Idéalement situé à mi-chemin entre Bonifacio et Corte, le lieu est très fréquenté, même en septembre." />
        <br></br>
        <Text english="For info about Corte, see Day 9." french="Pour les informations sur Corte, voir Jour 9." />
    </p>;
    const detailsMorning = <p>
        <Text english="After parking at the " french="Après vous être garés au " />
        <b><a href="https://goo.gl/maps/eyLupSGD5hCJFuUB9" target='_blank'><Text english="Bocca di Larone car park" french="parking du col de Bocca di Larone"/></a></b>
        <Text english=", go down along the road until the " french=", descendez le long de la route jusqu'au " />
        <b><a href="https://goo.gl/maps/h5Jqk3V2GZiWa6KG6" target='_blank'><Text english="first hairpin bend" french="premier virage en épingle"/></a></b>
        <Text english=", starting point of the hike with a magnificent view of the " french=", point de départ de la randonnée doté d'une magnifique vue sur les aiguilles de Bavella. Le parking se remplit vite, il est recommandé d'arriver avant 10h, ensuite il faudra se garer le long de la route." />
        <i><Text english="Aiguilles de Bavella" french="" /></i>
        <Text english=". The parking lot fills up quickly, it is recommended to arrive before 10am, otherwise you will have to park along the road." french="" />
        <br></br>
        <Text english="To get to the " french="Pour rejoindre les " />
        <b><Text english="natural pools or Purcaraccia" french="piscines naturelles de Purcaraccia" /></b>
        <Text english=", take the path that goes up the river. You will pass several pools along the way. After an hour of climbing (at a quick pace), you will be rewarded with these magnificent natural pools, filled with very fresh water. The return is made by the same path." french=", il suffit de suivre le sentier (et la horde de gens) qui remonte le long d'une rivière et qui longe parfois quelques bassins. Après une heure d'ascension à un rythme soutenu, vous serez récompensé par ces magnifiques piscines naturelles, remplies d'eau tout de même très fraîche. Le retour se fait par le même chemin." />
        <br></br>
        <Text english="Make sure to wear closed shoes and bring a picnic. It is also possible to go canyoning." french="Prévoir des chaussures fermées et un pique-nique. Il est également possible de faire d'y faire du canyoning." />
    </p>

    const detailsAfternoon = <div></div>

    const detailsUseful = <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/uu5TC7RsknMjzWtS9" target='_blank'><Text english="1h45 drive from Bonifacio" french="1h45 de route depuis Bonifacio" /></a>
            <br></br>
            <a href="https://goo.gl/maps/MoqDcgSQJduokTpv7" target='_blank'><Text english="1h10 drive from Porto-Vecchio" french="1h10 de route depuis Porto-Vecchio" /></a>
            <br></br>
            <a href="https://goo.gl/maps/2uXcXami3sJDU4v67" target='_blank'><Text english="1h40 drive to Corte" french="1h40 de route jusqu'à Corte" /></a>
        </p>
        <br></br>
        <br></br>
        <a href="https://goo.gl/maps/eyLupSGD5hCJFuUB9" target='_blank'><img src="./icons/parking.png"></img></a>
        <p>
            <a href="https://goo.gl/maps/eyLupSGD5hCJFuUB9" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" Bocca di Larone" french=" Bocca di Larone" />
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/urfjjgy5Hi89jvnK6" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" at Corte University" french=" à l'université de Corte" />
        </p>
        <br></br>
        <br></br>
        <a href="https://www.visorando.com/randonnee-les-cascades-de-purcaraccia/" target='_blank'><img src="./icons/hike.png"></img></a>
        <p>
            <a href="https://www.visorando.com/randonnee-les-cascades-de-purcaraccia/" target='_blank'><b><Text english="Visorando link" french="Lien Visorando" /></b></a>
            <Text english=" of the hike" french=" de la randonnée" />
        </p>
    </div>

    return(
        <div className={`day-six`}>
            <Day dayNumber={6}
                 introEnglishTitle="Road to Corte" introFrenchTitle="Route vers Corte"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={true}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"to visit the cascades of Purcaraccia before going to Corte."} programFrenchMorning={"de visiter les cascades de Purcaraccia avant de se rendre à Corte."} 
                 programEnglishAfternoon={""} programFrenchAfternoon={""}
            />
        </div>
    );
}

export default DaySix;