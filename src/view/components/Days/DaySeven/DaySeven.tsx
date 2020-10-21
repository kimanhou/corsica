import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DaySeven.scss';
import Map from './Map';

interface IDaySevenProps {
}

const DaySeven : React.FC<IDaySevenProps> = props => {
    const introText = 
    <p>
        <b><Text english="Corte" french="Corte" /></b>
        <Text english=" is the historical and cultural capital of Corsica. It was in fact chosen by Pascal Paoli as the capital of independent Corsica between 1755 and 1769. It is the seat of the only university on the island, obviously named Pascal Paoli, which has about 4,000 students (more than the half the city's population)." 
              french=" est la capitale historique et culturelle de la Corse. Elle fut en effet choisie par Pascal Paoli comme capitale de la Corse indépendante entre 1755 et 1769. Elle est le siège de la seule université de l'île, évidemment nommée Pascal Paoli, qui accueille environ 4 000 étudiants, ce qui constitue plus de la moitié de la population de la ville." />
        <br></br>
        <Text english="Corte is also a magnet for hikers thanks to its geographical location. The city is located at the confluence of two rivers: the Tavignano and the Restonica, both of which have carved out valleys suitable for walking. Among the multiple trails, we chose two day hikes, each in the valley of one of these rivers, and we decided to start with the harder one: " 
              french="Corte est également un aimant à randonneurs grâce à sa situation géographique. La cité se situe en effet au confluent de deux fleuves : le Tavignano et la Restonica, qui ont tous les deux creusé des vallées propices à la marche. Parmi les multiples sentiers, nous avons choisi deux randonnées d'une journée, chacune dans la vallée d'un de ces fleuves, et nous avons décidé de commencer par la plus dure : " />
        <b><Text english="hiking to Lake Capitello in the Restonica Valley" french="la randonnée au lac de Capitello dans la vallée de la Restonica" /></b>
        <Text english="." french="." />
    </p>;
    const detailsMorning = 
    <div>
        <p>
            <h2><Text english="Getting to the starting point" french="Se rendre au point de depart" /></h2>
            <br></br>
            <Text english="The starting point of the hike is 16 km southwest of Corte town center. The road is in good condition but winding and sometimes very narrow, nothing overwhelming if you're cautious. " french="Le point de départ de la randonnée se situe à 16 km au sud ouest du centre ville de Corte. La route est en bon état mais sinueuse et parfois très étroite, rien d'insurmontable avec de la prudence. " />
            <a href="https://goo.gl/maps/AM7j7pmxRnNvFJ7E9" target='_blank'><Text english="At the end of the road" french="Au bout de la route" /></a>
            <Text english=", you will be greeted by officials and you will have to pay the " french=", on vous fera payer le " />
            <b><Text english="parking fee (6€ per car, 3€ per motorcycle)" french="tarif d'entrée de 6€ par voiture" /></b>
            <Text english=" there, then you will be shown where to park. This process is used to optimise parking space. The later you arrive, the further down you have to park, which means the more you have to walk up to get to the starting point of the hike, except for motorcycles because they have a dedicated parking spot next to the " french=" (3€ pour les motos) et on vous indiquera où vous garer. Cela permet d'optimiser les places de parking. Plus vous arrivez tard, plus vous devez vous garer bas et donc plus vous avez à monter à pied, sauf les motos qui ont un emplacement réservé tout en haut, à côté de la " />
            <a href="https://goo.gl/maps/cysGQsRk3gfbjMqm6" target='_blank'><Text english="" french="bergerie de Melo" /><i><Text english="bergerie de Melo" french="" /></i></a>
            <Text english="." french="." />
            <br></br>
            <Text english="There is also a shuttle bus, which departs from the " french="Une navette est également à la diposition des visiteurs depuis le " />
            <a href="https://goo.gl/maps/AM7j7pmxRnNvFJ7E9" target='_blank'><Text english="information point" french="point d'information" /></a>
            <Text english=" located 5 km from the entrance of the valley (on Corte's side). It is only supposed to work in August but we saw it pass in September so it is better to inquire before taking it (the infos " french=" situé à 5 km de l'entrée de la vallée (côté Corte). Elle n'est censée fonctionner qu'au mois d'août mais nous l'avons vue passer en septembre donc mieux se renseigner avant de l'emprunter (les infos " />
            <a href="https://www.mairie-corte.fr/Vallee_de_la_Restonica_page_178_1,669.htm" target='_blank'><Text english="here" french="ici" /></a>
            <Text english=".)" french=")." />
            <br></br>
            <Text english="Between the car park and the old sheepfold of Melo, you can buy regional products and snacks. A refreshment bar marks the start of the hike." french="Entre le parking et l'ancienne bergerie de Melo, il y a possibilité d'acheter des produits régionaux et de se restaurer rapidement. Une buvette marque le début de la randonnée." />
            <br></br>
            <br></br>
            <br></br>
            <h2><Text english="Lake Melo" french="Lac de Melo" /></h2>
            <br></br>
            <Text english="It's a " french="Il faut " />
            <b><Text english="1h15" french="1h15" /></b>
            <Text english=" hike to get to " french=" pour atteindre le " />
            <a href="https://goo.gl/maps/gkUGAPB5TzUeZbLH8" target='_blank'><Text english="Lake Melo" french="lac de Melo" /></a>
            <Text english=". It obviously goes up, however " french=". Le chemin grimpe évidemment mais ne présente " />
            <b><Text english="nothing too difficult" french="pas de difficulté majeure" /></b>
            <Text english=". Some passages require the use of two hands and the end of the asension has ladders and metal ropes. However, there is nothing to worry about, even for children and older people in good physical shape." french=". Certains passages nécessitent de se servir de deux mains et la fin de l'asension comporte des échelles et des cordes métalliques. Cependant rien d'affolant, même pour des enfants et des personnes plus âgées en bonne forme physique." />
            <br></br>
            <Text english="Lake Melo is a great place to have a picnic. Choose a flat rock on the water's edge and enjoy the view, before heading to Lake Capitello if you still have energy." french="Le lac de Melo est un bel endroit où pique-niquer. Choisissez vous un rocher plat au bord de l'eau et profitez de la vue, avant de repartir vers le lac de Capitello si vous avez encore de l'énergie." />
            <br></br>
            <br></br>
            <br></br>
            <h2><Text english="Lake Capitello" french="Lac de Capitello" /></h2>
            <br></br>
            <Text english="From Lake Melo to " french="Du lac de Melo au " />
            <a href="https://goo.gl/maps/gkUGAPB5TzUeZbLH8" target='_blank'><Text english="Lake Capitello" french="lac de Capitello" /></a>
            <Text english=", it's a " french=", il faut compter " />
            <b><Text english="45 min" french="45 min" /></b>
            <Text english=" hike, " french=" de grimpette, " />
            <b><Text english="this part is harder and steeper" french="cette portion est plus dure et plus raide" /></b>
            <Text english=". It is more like climbing than hiking, however we ran into children there. Your efforts will be rewarded with a magnificent view of the lake." french=". Elle s'apparente plus à de l'escalade que de la randonnée, cependant nous y avons croisé des enfants. Les efforts sont récompensés par une magnifique vue sur le lac." />
            <br></br>
            <Text english="It is colder and windier there than during the trip. We saw someone swimming there, however the water is really cold. The GR20 passes behind Lake Capitello and offers a viewpoint with the two lakes one behind the other." french="Il y fait plus froid et plus venteux que durant le trajet. Nous avons vu quelqu'un s'y baigner, cependant l'eau est vraiment très froide. Le GR20 passe derrière le lac de Capitello et offre un point de vue comportant les deux lacs l'un derrière l'autre." />
            <br></br>
            <br></br>
            <br></br>
            <h2><Text english="Way back" french="Retour" /></h2>
            <br></br>
            <Text english="The return is made by the same way as the outward journey. Walking very quickly, it took us 1h25 to reach the car park from Lake Capitello." french="Le retour se fait par le même chemin que l'aller. En marchant très vite, nous avons mis 1h25 à rejoindre le parking depuis le lac de Capitello." />
        </p>
        <IconAndText englishText="35 min depuis Corte" frenchText="35 min depuis le centre de Corte" iconSrc="./icons/car.png"/>
        <IconAndText englishText="6€" frenchText="6€" iconSrc="./icons/parking.png"/>
        <IconAndText englishText="4h return trip at a fast pace with no breaks(1h15 to Lake Melo + 45 min to Lake Capitello)" frenchText="4h A/R à un bon rythme sans pause (1h15 jusqu'au lac de Melo + 45 min jusqu'au lac de Capitello)" iconSrc="./icons/hike.png"/>
    </div>
    const detailsAfternoon = <div></div>
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
        <div className={`day-seven`}>
            <Day dayNumber={7}
                 introEnglishTitle="Hike in Restonica gorges" introFrenchTitle="Randonnee dans la vallee de la Restonica"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={true}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"to hike up to Lake Melo, even Lake Capitello, in Restonica Gorges."} programFrenchMorning={"de monter jusqu'au lac Melo, voire le lac de Capitello, dans la vallée de la Restonica."} 
                 programEnglishAfternoon={""} programFrenchAfternoon={""}
            />
        </div>
    );
}

export default DaySeven;