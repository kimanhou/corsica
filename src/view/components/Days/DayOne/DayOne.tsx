import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day, { IPhotoData } from '../Day';
import IconAndText from '../IconAndText';
import './DayOne.scss';
import Map from './Map';

const DayOne : React.FC = props => {
    const introText = <p>
        <b><Text english="Ajaccio" french="Ajaccio" /></b>
        <Text english=", or " french=", ou " />
        <i><Text english="Aiacciu" french="Aiacciu" /></i>
        <Text english=" in Corsican, is the administrative center of Corsica with a population of about 100,000 inhabitants. Its port and airport make it a good landing point for many travelers." french=" en Corse, est la préfecture du département de la Corse du Sud et de la région Corse. Elle compte un peu plus de 100 000 habitants et est dotée d’un grand port et d’un aéroport, ce qui en fait un point de départ pratique pour beaucoup de vacanciers." />
    </p>
    const detailsMorning = <p>
        <Text english="" french="Le " />
        <b><Text english="Ajaccio old town" french="centre ville d'Ajaccio" /></b>
        <Text english=" is rather small and you can easily visit if in half a day. You will be able to enjoy the colorful streets, the cathedral, the citadel (exterior only as it is still in use for military purposes), Général de Gaulle Square, Foch Square and the marina. The paid attractions are :" french=" se visite facilement en une demie-journée, ce qui permet de se promener tranquillement dans les ruelles colorés et de voir la cathédrale, l’extérieur de la citadelle (l’intérieur est encore utilisé à des fins militaires), la place du Général de Gaulle, la place Foch et le port de plaisance. Les attractions payantes sont :" />
        <ul>
            <li><Text english="- Fesch Palace which houses the " french="- le palais Fesch qui abrite le musée des Beaux Arts : 8€" />
            <i><Text english="musée des Beaux Arts" french="" /></i>
            <Text english=" : 8€" french="" /></li>
            <li><Text english="- Bonaparte house : 7€" french="- la maison Bonaparte : 7€" /></li>
        </ul>
    </p>
    const detailsAfternoon = <div>
        <p>
            <b><Text english="The Blood Islands" french="Les Îles Sanguinaires" /></b>
            <Text english=" are an archipelago of 4 small islands located at the entrance of Ajaccio gulf. They take their name after their dark red color. To see them from the land, you need to go to " french=" sont un archipel de quatre îlots situé à l’entrée du golf d’Ajaccio. Elles tirent leur nom de leur couleur rouge foncé. Pour les voir depuis la terre, il faut se rendre sur " />
            <b><Text english="Parata Peninsula" french="la presqu’île de la Parata" /></b>
            <Text english=" and to park at " french=" et se garer à la " />
            <b><Text english="" french="Maison du Grand Site de France des Îles Sanguinaires - Pointe de la Parata" /></b>
            <i><Text english="Maison du Grand Site de France des Îles Sanguinaires - Pointe de la Parata" french="" /></i>
            <Text english=" (which roughly translates to House of the Great Site of France of Blood Islands - Parata peninsula)" french="" />
            <Text english=". From there you can pick among 3 well marked hikes, which are detailed in the " french=". De là, on peut choisir parmi 3 sentiers bien balisés et détaillés dans le " />
            <a href="https://www.grandsitesanguinaires-parata.com/wp-content/uploads/2020/03/depliant-fr-2018-final-bd.pdf" target='_blank'>
                <Text english="" french="dépliant de la Maison du Grand Site" />
                <i><Text english="Maison du Grand Site" french="" /></i>
                <Text english="'s leaflet" french="" />
            </a>
            <Text english=" or just walk to the end of the peninsula for the view. This spot gets especially crowded at sunset." french=" ou tout simplement se promener jusqu’à la pointe pour admirer la vue. Ce spot est particulièrement populaire lors du coucher de soleil." />
            <b><Text english=" The whole site is free, you only have to pay for parking" french=" L’accès au site est gratuit, seul le parking est payant" /></b>
            <Text english=" (" french=" (" />
            <a href="https://www.grandsitesanguinaires-parata.com/stationnement/" target='_blank'><Text english="prices here" french="tous les tarifs ici" /></a>
            <Text english=")." french=")." />
            <br></br>
            <Text english="Another option is to book a cruise to see the islands from the sea." french=" Il est également possible de voir les îles lors d’une croisière en bateau." />
        </p>
        <IconAndText englishText="25 min drive from the city center of Ajaccio" frenchText="25 min depuis le centre d'Ajaccio" iconSrc="./icons/car.png"/>
        <IconAndText englishText="4€ / 2h" frenchText="4€ / 2h" iconSrc="./icons/parking.png"/>
        <IconAndText englishText="1h30 for a combination of the 3 hikes" frenchText="1h30 pour une combinaison des 3 sentiers" iconSrc="./icons/hike.png"/>
    </div>
    const detailsUseful = <div>
        <a href="https://goo.gl/maps/883hx6pWFVmwTHEE6" target='_blank'><img src="./icons/parking.png"></img></a>
        <p>
            <a href="https://goo.gl/maps/883hx6pWFVmwTHEE6" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" 15 min walk from Ajaccio city center along the beach. Alternatively, you can also park at " french=" à 15 min à pied du centre ville d'Ajaccio en longeant la mer. À côté, " />
            <a href="https://goo.gl/maps/43zKqMnspMNSsXWs5" target='_blank'>
                <Text english="" french="le parking de la Place Miot"/>
                <i><Text english="parking de la Place Miot" french=""/></i>
            </a>
            <Text english=" for 50 ct/hour from 9am to 12pm and from 2pm to 7.30pm for a maximum of 8h30." french=" est en zone longue durée, ce qui signifie que le stationnement est payant de 9h-12h et de 14h-19h30 pour un tarif de  50ct/heure et une durée limitée à 8h30 maximum." />
        </p>
        <a href="https://goo.gl/maps/883hx6pWFVmwTHEE6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <img src="./icons/info.png"></img>
        <p>
            <a href="https://www.ajaccio-tourisme.com/" target='_blank'><b><Text english="Tourist office" french="L’office de tourisme" /></b>
            <Text english=" of Ajaccio and its region" french=" du pays d’Ajaccio" /></a>
        </p>
        <a href="https://goo.gl/maps/xNSQqKgStDGy4abBA" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://www.ajaccio-tourisme.com/" target='_blank'><img src="./icons/website.png"></img></a>
        <br></br>
        <br></br>
        <p>
            <Text english="The only " french="Seul " />
            <b><Text english="Decathlon" french="Decathlon" /></b>
            <Text english=" on the island (sporting goods retailer which sells affordable products, perfect to pick up snorkeling masks, fins and water shoes)" french=" de l'île" />
        </p>
        <a href="https://goo.gl/maps/GdkcmhiHNnPdBM2c8" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <p>
            <a href="https://www.grandsitesanguinaires-parata.com/" target='_blank'><b><Text english="Website of Parata Peninsula and Blood Islands" french="Site de la Pointe de la Parata et des Îles Sanguinaires" /></b></a>
        </p>
        <a href="https://goo.gl/maps/sCeZcYW24TejFKyDA" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://www.grandsitesanguinaires-parata.com/" target='_blank'><img src="./icons/website.png"></img></a>
    </div>

    const photos : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'landscape'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'},
        {photoName : '7.jpg', gridItemType : 'portrait'},
        {photoName : '8.jpg', gridItemType : 'portrait'},
        {photoName : '9.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'portrait'},
        {photoName : '11.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '12.jpg', gridItemType : 'panorama'},
    ]

    return(
        <div className={`day-one`}>
            <Day dayNumber={1} 
                 introEnglishTitle="Ajaccio" introFrenchTitle="Ajaccio"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"visit of Ajaccio old town"} programFrenchMorning={"visite du centre ville d'Ajaccio"} 
                 programEnglishAfternoon={"small hike on Parata Peninsula to admire the Blood Islands"} programFrenchAfternoon={"petite randonnée sur la presqu'île de la Parata pour admirer les Îles Sanguinaires"}
                 photos={photos}
            />
        </div>
    );
}

export default DayOne;