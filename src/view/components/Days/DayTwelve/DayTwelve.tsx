import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayTwelve.scss';
import Map from './Map';

interface IDayTwelveProps {
}

const DayTwelve : React.FC<IDayTwelveProps> = props => {
    const introText = 
    <p>
        <Text english="A day that condenses hiking, stroll in a city and beach time with a minimum of driving." french="Une journée qui condense randonnée, visite de ville et plage avec un minimum de conduite." />
        <br></br>
        <Text english="" french="La " />
        <b><Text english="Revellata Peninsula" french="Pointe de la Revellata" /></b>
        <Text english=" is a wild peninsula at the end of which is one of the first lighthouses in Corsica. This square tower houses a Center for Oceanographic Studies and is now controlled from Bastia." french=" est une presqu'île sauvage au bout duquel se trouve un des premiers phares de Corse. Cette tour carrée abrite un Centre d’Etudes Océanographiques et est aujourd’hui contrôlé depuis Bastia." />
        <br></br>
        <Text english="Known for its music festival, its half-moon bay and the richness of its heritage, " french="Connue pour son festival de musique, sa baie en demi-lune et la richesse de son patrimoine, " />
        <b><Text english="Calvi" french="Calvi" /></b>
        <Text english=" and its majestic Genoese citadel stand proudly in the North-West of Corsica." french=" et sa majestueuse citadelle génoise se dressent fièrement au Nord-Ouest de la Corse." />
    </p>;
    const detailsMorning = 
    <div>
        <p>
            <Text english="After you are park " french="Après vous être garés " />
            <a href="https://goo.gl/maps/74mcskMPHDPaCZPM9" target='_blank'><b><Text english="at the top of the trail" french="en haut du sentier" /></b></a>
            <Text english=", take a few moments to admire the view of the peninsula." french=" de la Pointe de la Revellata, prenez quelques instants pour admirer la vue sur la presqu'île." />
            <br></br>
            <Text english="Several tracks and trails lead to the " french="Plusieurs pistes et sentiers mènent au " />
            <b><Text english="lighthouse" french="phare de la Pointe de la Revellata" /></b>
            <Text english=", more or less along the coast. A dirt track on which only 4x4s and mountain bikes can travel, also crosses the peninsula. However, it is advisable to explore this piece of land on foot to be able to appreciate the small wild corners and other coves. Do not hesitate to move away from the main track to take less traveled paths, or simply follow the route given by " french=", longeant plus ou moins la côte. Une piste en terre sur laquelle seuls les 4x4 et les VTT peuvent circuler, traversent également la presqu'île. Il est cependant conseillé d'explorer ce bout de terre à pied pour pouvoir apprécier les petits recoins sauvages et autres criques. N'hésitez pas à vous éloigner de la piste principale pour prendre des sentiers moins fréquentés, ou alors suivez tout simplement l'itinéraire donné par " />
            <a href="https://www.visorando.com/randonnee-la-pointe-de-la-revellata/" target='_blank'><b><Text english="Visorando" french="Visorando" /></b></a>
            <Text english="." french="." />
            <br></br>
            <Text english="There is a small " french="Il y a un petit " />
            <b><Text english="belvedere" french="belvédère" /></b>
            <Text english=" behind the lighthouse, from which you can admire the sea." french=" derrière le phare d'où l'on peut admirer la mer." />
            <br></br>
            <Text english="You can swim at " french="Il est possible de se baigner sur la " />
            <a href="https://goo.gl/maps/UzfXrKBraVsDMkvp9" target='_blank'><b><Text english="Alaga beach" french="plage de l'Alga" /></b></a>
            <Text english=" before going back up to the parking lot, or any other wild beach you might encounter along the way." french=" avant de remonter vers le parking, ou toute autre plage sauvage que vous rencontrerez sur votre chemin et qui vous fera envie." />
            <br></br>
            <Text english="It takes about 1h30 to reach the lighthouse at the end of the peninsula. So allow " french="Il faut environ 1h30 pour atteindre le phare, situé à l'extrémité de la presqu'île. Compter donc " />
            <b><Text english="3h return trip" french="3h aller-retour" /></b>
            <Text english=" for this hike (without swim time)." french=" pour cette randonnée (sans temps de baignade)." />
        </p>
        <IconAndText englishText="10 min drive from the city center of Calvi" frenchText="10 min depuis le centre de Calvi" iconSrc="./icons/car.png"/>
        <IconAndText englishText="0€" frenchText="0€" iconSrc="./icons/parking.png"/>
        <IconAndText englishText="3h" frenchText="3h" iconSrc="./icons/hike.png"/>
    </div>
    const detailsAfternoon = <div>
        <p>
            <Text english="Capital of " french="Capitale de la Balagne, " />
            <i><Text english="Balagne" french="" /></i>
            <Text english=", " french="" />
            <b><Text english="Calvi" french="Calvi" /></b>
            <Text english=" offers a remarkable spectacle thanks to its medieval town perched on its rock against a backdrop of mountains, like a setting set on azure water." french=" offre un remarquable spectacle grâce à sa cité médiévale perchée sur son rocher sur fond de montagnes, tel un écrin posé sur l'eau couleur azur." />
            <br></br>
            <Text english="Have a stroll on " french="On se balade sur le " />
            <b><Text english="Landry quay" french="quai Landry" /></b>
            <Text english=" to admire the fishing boats, tourist boats and yachts. Facing the " french=" pour admirer les bateaux de pêche, de tourisme et yachts. Face au " />
            <b><Text english="port" french="port" /></b>
            <Text english=", many bars and restaurants line up on the seaside in a festive atmosphere. Just behind, a pedestrian street full of restaurants and small shops is in full swing during the summer." french=", de nombreux bars et restaurants s'alignent sur le bord de mer dans une ambiance festive. Juste derrière, une rue piétonne pleine de restaurants et petites boutiques bat son plein pendant l'été." />
            <br></br>
            <Text english="After the bustle of the lower town, go up to the " french="Après l'animation de la ville basse, montez à la " />
            <b><Text english="citadel" french="citadelle" /></b>
            <Text english=" and stroll through the narrow and colorful streets of the imposing Genoese building. Don't miss the " french=" et flânez dans les ruelles étroites et colorées de l'imposant édifice génois. Ne manquez pas la "/>
            <a href="https://goo.gl/maps/ueQT9yXLiu6UYRUEA" target='_blank'><Text english="Saint John Baptist Cathedral" french="cathédrale Saint Jean Baptiste"/></a>
            <Text english=", located in the heart of the city." french=", située au cœur de la cité." />
            <br></br>
            <Text english="Finally, a few steps from the city center, a " french="Enfin, à quelques pas du centre ville, une " />
            <b><Text english="long sandy beach" french="longue plage de sable fin" /></b>
            <Text english=" with immaculate white welcomes visitors in search of relaxation. The sea is " french=" au blanc immaculé offre ses bras aux visiteurs en quête de relaxation. La mer y est " />
            <b><Text english="very shallow" french="très peu profonde"/></b>
            <Text english=" there and you sink into it very slowly. The view of the citadel is magnificent." french=" et l'on s'y enfonce tout doucement. La vue sur la citadelle y est magnifique."/>
        </p>
    </div>
    const detailsUseful = <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/XFAxgq54Kvyq2q91A" target='_blank'><Text english="10 min drive from the city center of Calvi to Revellata Peninsula" french="10 min de route du centre ville de Calvi à la Pointe de la Revellata" /></a>
        </p>
        <br></br>
        <br></br>
        <img src="./icons/parking.png"></img>
        <p>
            <a href="https://goo.gl/maps/74mcskMPHDPaCZPM9" target='_blank'><b><Text english="Revellata Peninsula : Free parking" french="Pointe de la Revellata : Parking gratuit" /></b></a>
            <Text english=" at the starting point of the hike, about 40 parking spots." french=" au point de départ de la randonnée, environ 40 places." />
        </p>
        <a href="https://goo.gl/maps/opg8dvjjQk5nAXja7" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/opg8dvjjQk5nAXja7" target='_blank'><b><Text english="Calvi : Free parking" french="Calvi : Parking gratuit" /></b></a>
            <Text english=" at Super U" french=" au Super U" />
        </p>
        <a href="https://goo.gl/maps/opg8dvjjQk5nAXja7" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <a href="https://www.visorando.com/randonnee-la-pointe-de-la-revellata/" target='_blank'><img src="./icons/hike.png"></img></a>
        <p>
            <a href="https://www.visorando.com/randonnee-la-pointe-de-la-revellata/" target='_blank'><b><Text english="Visorando link" french="Lien Visorando" /></b></a>
            <Text english=" of the hike on Revellata Peninsula" french=" de la randonnée sur la Pointe de la Revellata" />
        </p>
        <br></br>
        <br></br>
        <img src="./icons/info.png"></img>
        <p>
            <a href="https://balagne-corsica.com/" target='_blank'>
                <b><Text english="" french="L’office de tourisme" /></b>
                <Text english="" french=" de Calvi - Balagne" />
            </a>
            <a href="https://en.balagne-corsica.com/" target='_blank'>
                <b><Text english="Tourist office" french="" /></b>
                <Text english=" of Calvi - Balagne" french="" />
            </a>
        </p>
        <a href="https://g.page/office-de-tourisme-calvi-balagne?share" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://balagne-corsica.com/" target='_blank'><img src="./icons/website.png"></img></a>
    </div>

    return(
        <div className={`day-twelve`}>
            <Day dayNumber={12}
                 introEnglishTitle="Calvi" introFrenchTitle="Calvi et la Pointe de la Revellata"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"Hike on Revellata Peninsula"} programFrenchMorning={"Randonnée sur la Pointe de la Revellata"} 
                 programEnglishAfternoon={"city center of Calvi and beach time"} programFrenchAfternoon={"visite du centre ville de Calvi et plage"}
            />
        </div>
    );
}

export default DayTwelve;