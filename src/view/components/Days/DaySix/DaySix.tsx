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
        <Text english="" french="Il est temps de quitter le Sud de la Corte pour s'enfoncer au cœur géographique et culturel de l'île : Corte. En chemin, nous vous proposons un arrêt alliant randonnée et baignade aux " />
        <b><Text english="" french="cascades de Purcaraccia" /></b>
        <Text english="" french=". Idéalement situé à mi-chemin entre Bonifacio et Corte, le lieu est très fréquenté, même en septembre." />
    </p>;
    const detailsMorning = <p>
        <Text english="" french="Après vous être garés au " />
        <b><a href="https://goo.gl/maps/eyLupSGD5hCJFuUB9" target='_blank'><Text english="" french="parking du col de Bocca di Larone"/></a></b>
        <Text english="" french=", descendez le long de la route jusqu'au " />
        <b><a href="https://goo.gl/maps/h5Jqk3V2GZiWa6KG6" target='_blank'><Text english="" french="virage en épingle"/></a></b>
        <Text english="" french=", point de départ de la randonnée doté d'une magnifique vue sur les aiguilles de Bavella. Le parking se remplit vite, il est recommandé d'arriver avant 10h, ensuite il faudra se garer le long de la route." />
        <br></br>
        <Text english="" french="Pour rejoindre les " />
        <b><Text english="" french="piscines naturelles de Purcaraccia" /></b>
        <Text english="" french=", il suffit de suivre le sentier (et la horde de gens) qui remonte le long d'une rivière et qui longe parfois quelques bassins. Après une heure d'ascension à un rythme soutenu, vous serez récompensé par ces magnifiques piscines naturelles, remplies d'eau tout de même très fraîche. Le retour se fait par le même chemin." />
        <br></br>
        <Text english="" french="Prévoir des chaussures fermées et un pique-nique. Il est également possible de faire d'y faire du canyoning." />
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
            <Text english=" " french=" Bocca di Larone" />
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