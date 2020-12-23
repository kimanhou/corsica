import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day, { IPhotoData } from '../Day';
import IconAndText from '../IconAndText';
import './DayNine.scss';
import Map from './Map';

interface IDayNineProps {
}

const DayNine : React.FC<IDayNineProps> = props => {
    const introText = 
    <p>
        <Text english="After two days of intensive hiking, it's time to enjoy the " french="Après deux jours de randonnées intensives, il est temps de profiter du " />
        <b><Text english="city center of Corte" french="centre ville de Corte" /></b>
        <Text english=" (if it's not already done), historic and university town. Student life animates the city. The city center is not big but perched on a rock." french=" (si ce n'est pas déjà fait), ville historique et universitaire. La vie étudiante anime la cité. Le centre ville n'est pas grand mais tout en dénivelé." />
        <br></br>
        <Text english="Only 1h15 drive from Corte, is " french="À seulement 1h15 de route de Corte, se trouve " />
        <b><Text english="Bastia" french="Bastia" /></b>
        <Text english=", the second most populated town in Corsica with a population of about 45,000 inhabitants. Located in the north-east of Corsica, at the base of Cap Corse, between sea and mountains, the city is the largest port on the island and its main commercial town." french=", 2e commune la plus peuplée de Corse avec environ 45 000 habitants. Située dans le nord-est de la Corse, à la base du Cap Corse, entre mer et montagne, la ville est le plus gros port de l'île et sa principale ville commerciale." />
    </p>;
    const detailsMorning = 
    <p>
        <b><Text english="Corte" french="Corte" /></b>
        <Text english=", or " french=", ou " />
        <i><Text english="Corti" french="Corti" /></i>
        <Text english=", is built around its " french=", est bâtie autour de sa " />
        <b><Text english="citadel" french="citadelle" /></b>
        <Text english=" which overlooks the surrounding valleys from its « " french=" qui domine depuis son « " />
        <b><Text english="eagle's nest" french="nid d’aigle" /></b>
        <Text english=" ». The " french=" » les vallées alentours. Le " />
        <b><Text english="city center" french="centre ville" /></b>
        <Text english=" is not very extensive but is very steep. It is organized around " french=" n'est pas très étendu mais est très escarpé. Il s'organise autour de la " />
        <a href="https://goo.gl/maps/X4bn4eksPuBdt9YG7" target='_blank'><b><Text english="Paoli Square" french="Place Paoli" /></b></a>
        <Text english=", on which stands a bronze statue of the man in question, a true regional hero. This square opens to the north on " french=", sur laquelle se dresse une statue en bronze du bonhomme en question, véritable héros régional. Cette place s'ouvre au Nord sur le " />
        <a href="https://goo.gl/maps/Lm4ubrkhLAFQjTPN9" target='_blank'>
            <b>
                <Text english="" french="Cours Paoli" />
                <i><Text english="Cours Paoli" french="" /></i>
            </b>
        </a>
        <Text english=", which is the main shopping street of the city." french=", qui est l'artère commerciale de la cité." />
        <br></br>
        <Text english="Points of tourist interest in Corte include the " french="Les points d'intérêt touristique de Corte comprennent notamment la " />
        <a href="https://goo.gl/maps/DQ3TpdmgXDcF3D9E6" target='_blank'><b><Text english="Fountain of the Four Cannons" french="Fontaine des Quatre Canons" /></b></a>
        <Text english=", " french=", l'" />
        <a href="https://goo.gl/maps/xscGHZ7fzVT5BizS8" target='_blank'><b><Text english="Church of the Annunciation" french="église de l'Annonciation" /></b></a>
        <Text english=" and of course the " french=" et bien entendu le " />
        <a href="https://goo.gl/maps/6Hgj8KEuhBcGfYyS6" target='_blank'><b><Text english="belvedere" french="belvédère" /></b></a>
        <Text english=" which offers a splendid panorama on the confluence of the Restonica and the Tavignano and a breathtaking view of the eagle's nest. Corte has housed since 1997 the " french=" qui offre un splendide panorama sur le confluent de la Restonica et du Tavignano et une vue imprenable sur le nid d'aigle. Corte abrite depuis 1997 le " />
        <a href="http://www.musee-corse.com/index.php/fre/Accueil" target='_blank'><Text english="Regional Museum of Anthropology of Corsica" french="Musée Régional d’Anthropologie de la Corse" /></a>
        <Text english=", or simply Museum of Corsica, sanctuary of culture and island heritage. Admission (5.50€) also includes access to the eagle's nest." french=", ou tout simplement musée de la Corse, sanctuaire de la culture et du patrimoine insulaire. L'entrée (5,50€) comprend également l'accès au nid d'aigle." />
        <br></br>
        <Text english="Here is a " french="Nous vous proposons un " />
        <a href="https://goo.gl/maps/iGNMCKW34dnmhKTY8" target='_blank'><b><Text english="route bringing together the essentials of the city center of Corte" french="parcours rassemblant les incontournables du centre ville de Corte" /></b></a>
        <Text english=". It starts at Paoli Square and ends on Gaffory Square." french=". Il débute à la Place Paoli et se termine sur la place Gaffory." />
    </p>
    const detailsAfternoon = <div>
        <p>
            <Text english="On the way from Corte to Bastia, you can stop at " french="Sur le chemin entre Corte et Bastia, vous pouvez vous arrêter à l'ancienne cathédrale de la Canonica, aussi appelée " />
            <a href="https://goo.gl/maps/JfTuiLz8Jt3bWdD47" target='_blank'><b><Text english="Lucciana Cathedral" french="cathédrale de Lucciana" /></b></a>
            <Text english=", located right next to the airport. Of Romanesque architecture, it is harmonious, very well preserved and even renovated." french=", située juste à côté de l'aéroport. D'architecture romane, elle est harmonieuse, très bien conservée et même rénovée." />
            <br></br>
            <Text english="The essentials of Bastia town center are:" french="Les incontournables du centre ville de Bastia sont :" />
            <ul>
                <li>
                    <Text english="- " french="- la " />
                    <a href="https://goo.gl/maps/oFT54dcgcA9fpZ82A" target='_blank'><b><Text english="Saint Nicolas Square" french=" Place Saint-Nicolas" /></b></a>
                    <Text english="impressive by its proportions, there is a statue of Napoleon as a Roman emperor." french=", impressionnante par ses proportions, on y trouve notamment une statue de Napoléon en empereur romain." />
                </li>
                <li>
                    <Text english="- " french="- l'" />
                    <a href="https://goo.gl/maps/tn16ia8VJJXZGVwC9" target='_blank'><b><Text english="Saint Jean Baptiste Church" french="église Saint Jean Baptiste" /></b></a>
                    <Text english=", the largest in Corsica, overlooks the old town and the port." french=", la plus vaste de Corse, surplombe la vieille ville et le port." />
                </li>
                <li>
                    <Text english="- the " french="- le " />
                    <a href="https://goo.gl/maps/gibqAEKRTugHFT728" target='_blank'><b><Text english="Old Port" french="Vieux Port" /></b></a>
                    <Text english=" which has kept all its authenticity, offers a beautiful panorama on the city center of Bastia." french=", qui a gardé toute son authenticité, offre un beau panorama sur le centre ville de Bastia." />
                </li>
                <li>
                    <Text english="- " french="- l'" />
                    <a href="https://goo.gl/maps/dqDZgkAhwvP5mh1F8" target='_blank'><b><Text english="Romieu stairs and gardens" french="escalier et le jardin Romieu" /></b></a>
                    <Text english=", located at the end of the south quay of the Old Port, this staircase with harmonious curves provides access to the Citadel district. If you want to avoid the steps, you can take the shaded alleys of the Romieu garden." french=", au bout du quai Sud du Vieux Port, cet escalier aux courbes harmonieuses permet d'accéder au quartier de la citadelle. Si on veut éviter les marches, on peut emprunter les allées ombragées du jardin Romieu." />
                </li>
                <li>
                    <Text english="- the " french="- le quartier de la " />
                    <a href="https://goo.gl/maps/uHbdtcmP5ttySryF9" target='_blank'><b><Text english="Citadel district" french="citadelle" /></b></a>
                    <Text english=", similar to a village with its narrow streets lined with buildings with colorful facades." french=", semblable à un village avec ses ruelles étroites bordées d'immeubles aux façades colorées." />
                </li>
                <li>
                    <Text english="- " french="- le " />
                    <a href="https://goo.gl/maps/oxdwB544W9XsBVRbA" target='_blank'><b><Text english="Governors' Palace" french="Palais des Gouverneurs" /></b></a>
                    <Text english=", which houses the " french=", qui héberge de le " />
                    <a href="http://musee.bastia.corsica/fr/accueil-885.html" target='_blank'><Text english="Museum of History of Bastia" french="Musée d'histoire de Bastia" /></a>
                    <Text english="and its suspended gardens (price: 5€ / gardens only 1€ / free in low season). The castle was once the permanent residence of the governors of Genoa in Corsica." french=" et ses jardins suspendus (tarif : 5€ / jardins seuls 1€ / gratuit en hors saison). Le château était autrefois la la résidence permanente des gouverneurs de Gênes en Corse." />
                </li>
                <li>
                    <Text english="- " french="- la " />
                    <a href="https://goo.gl/maps/4tvhvgMxobGsNZ3F7" target='_blank'><b><Text english="Napoleon street" french="rue Napoléon" /></b></a>
                    <Text english=", which links Saint Nicolas Square and the Old Port, is entirely pedestrian." french=", qui relie la Place Saint-Nicolas et le Vieux Port, est entièrement piétonne." />
                </li>
                <li>
                    <Text english="- the " french="- la " />
                    <a href="https://goo.gl/maps/s7mUhmD77j8RRz9o9" target='_blank'><b><Text english="Market Square" french="Place du Marché" /></b></a>
                    <Text english=", also called « " french=", appelée « " />
                    <i><Text english="" french="u mercà"/></i>
                    <Text english=" » by locals, brings together producers, marketers and florists every weekend." french=" » par les Bastiais, rassemble chaque week-end producteurs, marchaîchers et fleuristes."/>
                </li>
            </ul>
            <Text english="From the Old Port, there is a " french="Depuis le port, il existe un " />
            <a href="https://goo.gl/maps/nY2AoYLHjRVz8P8h6" target='_blank'><Text english="lift" french="ascenseur" /></a>
            <Text english= "at the end of the South quay, which leads to the panoramic terrace located just below the restaurant " french=" à l'extrémité du quai Sud, qui mène à la terrasse panoramique située juste en dessous du restaurant " />
            <a href="https://goo.gl/maps/SGmg5rPswKFHdX6q9" target='_blank'><Text english="Chez Vincent" french="Chez Vincent" /></a>
            <Text english=" and just above Romieu Gardens. Very handy if you don't want to climb up !" french=" et au-dessus du jardin Romieu. Bien pratique si on veut éviter la montée à pied." />
            <br></br>
            <Text english="The tourist office offers a " french="L'office de tourisme propose une " />
            <a href="https://fr.calameo.com/read/00030453828b91de25407" target='_blank'><b><Text english="touristic booklet" french="brochure touristique" /></b></a>
            <Text english="available online. Inside you can find a presentation of the city and its history and a pedestrian itinerary around the city center, which lasts half a day on pages 13 and 14." french=" disponible en ligne. En outre une présentation de la ville et de son histoire, elle contient un circuit pédestre du centre ville à faire en une demie journée pages 13 et 14." />
        </p>
    </div>
    const detailsUseful = <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/JF34uNmn717vkosu7" target='_blank'><Text english="1h15 drive from Corte to Bastia" french="1h15 de route de Corte à Bastia" /></a>
        </p>
        <br></br>
        <br></br>
        <img src="./icons/parking.png"></img>
        <p>
            <a href="https://goo.gl/maps/urfjjgy5Hi89jvnK6" target='_blank'><b><Text english="Corte : Free parking" french="Corte : Parking gratuit" /></b></a>
            <Text english=" at Corte University" french=" à l'université de Corte" />
        </p>
        <a href="https://goo.gl/maps/urfjjgy5Hi89jvnK6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/daYrGunHpoyeYKyn7" target='_blank'><b><Text english="Bastia : Free parking" french="Bastia : Parking gratuit" /></b></a>
            <Text english=" Toga, 11 min walk from the tourist office on Saint-Nicolas square" 
                  french=" de la Toga, 11 min à pied de l'office de tourisme situé sur la place Saint-Nicolas" />
        </p>
        <a href="https://goo.gl/maps/daYrGunHpoyeYKyn7" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <img src="./icons/info.png"></img>
        <p>
            <a href="http://www.corte-tourisme.com/" target='_blank'>
                <b><Text english="Tourist office " french="L’office de tourisme " /></b>
                <i><Text english="Centru di Corsica" french="Centru di Corsica" /></i>
                <Text english=" in Corte" french=" à Corte" />
            </a>
        </p>
        <a href="https://goo.gl/maps/MYKPbZJW9bXhjWG86" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="http://www.corte-tourisme.com/" target='_blank'><img src="./icons/website.png"></img></a>
        <br></br>
        <p>
            <a href="https://www.bastia-tourisme.com/" target='_blank'><b><Text english="" french="L’office de tourisme" /></b>
            <Text english="" 
                  french="  intercommunal de Bastia" /></a>
                  <a href="https://www.bastia-tourisme.com/en" target='_blank'><b><Text english="Tourist office" french="" /></b>
            <Text english=" of Bastia" 
                  french="" /></a>
        </p>
        <a href="https://goo.gl/maps/Xf8ZWjYyBazJjcU46" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://www.bastia-tourisme.com/" target='_blank'><img src="./icons/website.png"></img></a>
    </div>

    const corte : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'landscape'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'}, 
        {photoName : '7.jpg', gridItemType : 'landscape'},
    ]

    const bastia : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'},
    ]

    const photos : IPhotoData[] = corte.concat(bastia);

    return(
        <div className={`day-nine`}>
            <Day dayNumber={9}
                 introEnglishTitle="Corte and Bastia" introFrenchTitle="Corte et Bastia"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"visit of Corte's historical center"} programFrenchMorning={"visite du centre ville de Corte"} 
                 programEnglishAfternoon={"visit of Bastia's historical center, with an optional stop at Lucciana Cathedral"} programFrenchAfternoon={"visite du centre ville de Bastia, avec un arrêt optionnel à la cathédrale de Lucciana"}
                 photos={photos}
            />
        </div>
    );
}

export default DayNine;