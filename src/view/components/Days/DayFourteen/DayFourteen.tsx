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
        <Text english="" french="Calanche ou calanques ?"/>
        <br></br>
        <Text english="" french="Calanche (qui se prononce " />
        <i><Text english="calanque" french="calanque" /></i>
        <Text english="" french=") est le pluriel du mot corse " />
        <i><Text english="calanca" french="calanca" /></i>
        <Text english="" french=" qui signifie calanque. Donc &ldquo;calanche&rdquo; ou &ldquo;calanques&rdquo; mais pas &ldquo;calanches&rdquo;… Et dans tous les cas, ça se prononce calanque !" />
        <br></br>
        <Text english="" french="Le site des " />
        <b><Text english="" french="calanques de Piana" /></b>
        <Text english="" french=", classé au patrimoine mondial de l'Unesco, est d'une beauté incroyable. Pour y accéder, il faut emprunter la seule route reliant Porto à Piana : la D81, route étroite et sinueuse, et surtout très fréquentée. Le spectacle depuis la route est époustouflant, cependant pour en profiter pleinement, il est plus agréable de visiter le site à pied." />
    </p>;

    const detailsMorning = 
    <p>
        <Text english="" french="Randonnée du parking de la Tête de Chien au belvédère donnant sur le château fort : 30 min aller, difficulté facile-moyen" />
        <a href="https://goo.gl/maps/tpGL1AW62U7k4Kz78" target='_blank'><Text english="" french="château fort" /></a>
        <br></br>
        <b><Text english="" french="" /></b>
        <Text english="Custom hike Roches bleues, ancien sentier du muletier 2h15" french="" />
        <a href="https://goo.gl/maps/fBtbrVCbsKxzgj8Z9" target='_blank'><Text english="" french="ancien chemin des muletiers" /></a>
        <br></br>
        <Text english="" french="Après une bonne matinée de randonnée, rendez-vous au " />
        <b><Text english="" french="charmant village de Piana" /></b>
        <Text english="" french=", qui surplombe le golfe de Porto et fait face à la presqu'île de Scandola. Il est classé parmi les &ldquo;plus beaux villages de France&rdquo;. Le cœur du village est organisé autour de " />
        <a href="https://goo.gl/maps/3RPRkvw7Krz9wheq9" target='_blank'><Text english="" french="l'église de l'Assomption" /></a>
        <Text english="" french=" et est constitué de ruelles escarpées bordées de jolies maisons fleuries. Quelques restaurants, traiteur et boulangeries vous accueillent pour le déjeuner." />
        
    </p>
    
    const detailsAfternoon = <div>
        <p>
            <Text english="" french="" />
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
        </p>
    </div>
    const detailsUseful = 
    <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/sL1h6S7rzhGRUAUXA" target='_blank'><Text english="20 min drive from the city center of Porto to Dog's Head car park, the road is narrow and winding" french="20 min de route du centre ville de Porto au parking de la Tête du Chien, la route est étroite et sinueuse" /></a>
            <br></br>
            <a href="https://goo.gl/maps/7DPqD3x7Qa8rjY996" target='_blank'><Text english="10 min drive from Dog's Head car park to the city center of Piana, often more when it's crowded" french="10 min de route du parking de la Tête du Chien au centre ville de Piana, souvent plus lorsqu'il y a du monde" /></a>
            <br></br>
            <a href="https://goo.gl/maps/9BpQbJ6UcDNgPboj8" target='_blank'><Text english="1h30 drive from the city center of Piana to Ajaccio" french="1h30 de route du centre ville de Piana à Ajaccio" /></a>
        </p>
        <br></br>
        <br></br>
        <img src="./icons/parking.png"></img>
        <p>
            <a href="https://goo.gl/maps/ErGKMx4goKVhesDp6" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" at Dog's Head car park, starting point of the hike to the belvedere. Only 15 spots." french=" au parking de la Tête de Chien, point de départ du sentier vers le belvédère donnant sur le château fort. Seulement une quinzaine de places." />
        </p>
        <a href="https://goo.gl/maps/ErGKMx4goKVhesDp6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <a href="https://www.visorando.com/randonnee-de-la-tete-de-chien-au-chateau-fort-a-pi/" target='_blank'><img src="./icons/hike.png"></img></a>
        <p>
            <a href="https://www.visorando.com/randonnee-de-la-tete-de-chien-au-chateau-fort-a-pi/" target='_blank'><b><Text english="Visorando link" french="Lien Visorando" /></b></a>
            <Text english=" of the hike from Dog's Head car park to the belvedere" french=" de la randonnée du parking de la Tête de Chien au belvédère donnant sur le château fort" />
            <br></br>
            <a href="https://www.visorando.com/randonnee-l-ancien-sentier-muletier-de-piana-ota/" target='_blank'><b><Text english="Visorando link" french="Lien Visorando" /></b></a>
            <Text english=" of the old mule track" french=" de l'ancien chemin des muletiers'" />
        </p>
        <br></br>
        <br></br>
        <img src="./icons/info.png"></img>
        <p>
            <a href="http://www.ouestcorsica.com/" target='_blank'>
                <b><Text english="Tourist office " french="L’office de tourisme " /></b>
                <Text english="of Piana" french=" de Piana" />
            </a>
        </p>
        <a href="https://goo.gl/maps/tcLJm66xjBYsEC766" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="http://www.ouestcorsica.com/" target='_blank'><img src="./icons/website.png"></img></a>
    </div>

    return(
        <div className={`day-fourteen`}>
            <Day dayNumber={14}
                 introEnglishTitle="" introFrenchTitle="Calanques de Piana et retour a Ajaccio"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={""} programFrenchMorning={"randonnée dans les calanques de Piana"} 
                 programEnglishAfternoon={""} programFrenchAfternoon={"route vers Ajaccio"}
            />
        </div>
    );
}

export default DayFourteen;