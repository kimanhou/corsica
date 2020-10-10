import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayOne.scss';

interface IDayOneProps {
}

const DayOne : React.FC<IDayOneProps> = props => {
    const detailsMorning = <p>
        <Text english="" french="Le " />
        <b><Text english="Ajaccio old town" french="centre ville d'Ajaccio" /></b>
        <Text english="is rather small and you can easily visit if in half a day." french=" se visite facilement en une demie-journée, ce qui permet de se promener tranquillement dans les ruelles colorés et de voir la cathédrale, l’extérieur de la citadelle (l’intérieur est encore utilisé à des fins militaires), la place du Général de Gaulle, la place Foch et le port de plaisance. Les attractions payantes sont :" />
        <ul>
            <li><Text english="" french="- le palais Fesch qui abrite le musée des Beaux Arts : 8€" /></li>
            <li><Text english="" french="- la maison Bonaparte : 7€" /></li>
        </ul>
    </p>
    const detailsAfternoon = <div>
        <p>
            <b><Text english="" french="Les Îles Sanguinaires" /></b>
            <Text english="" french=" sont un archipel de quatre îlots situé à l’entrée du golf d’Ajaccio. Elles tirent leur nom de leur couleur rouge foncé. Pour les voir depuis la terre, il faut se rendre sur " />
            <b><Text english="" french="la presqu’île de la Parata" /></b>
            <Text english="" french=" et se garer à la " />
            <b><Text english="" french="Maison du Grand Site de France des Îles Sanguinaires - Pointe de la Parata" /></b>
            <Text english="" french=". De là, on peut choisir parmi 3 sentiers bien balisés et détaillés dans le " />
            <a href="https://www.grandsitesanguinaires-parata.com/wp-content/uploads/2020/03/depliant-fr-2018-final-bd.pdf" target='_blank'><Text english="" french="dépliant de la Maison du Grand Site" /></a>
            <Text english="" french=" ou tout simplement se promener jusqu’à la pointe pour admirer la vue. Ce spot est particulièrement populaire lors du coucher de soleil." />
            <b><Text english="" french=" L’accès au site est gratuit, seul le parking est payant" /></b>
            <Text english=" (" french=" (" />
            <a href="https://www.grandsitesanguinaires-parata.com/stationnement/" target='_blank'><Text english="" french="tous les tarifs ici" /></a>
            <Text english="" french=")." />
            <br></br>
            <Text english="" french=" Il est également possible de voir les îles lors d’une croisière en bateau." />
        </p>
        <IconAndText englishText="25 min drive from Ajaccio city center" frenchText="25 min depuis le centre d'Ajaccio" iconSrc="./icons/car.png"/>
        <IconAndText englishText="4€ / 2h" frenchText="4€ / 2h" iconSrc="./icons/parking.png"/>
        <IconAndText englishText="1h30 for a combination of the 3 hikes" frenchText="1h30 pour une combinaison des 3 sentiers" iconSrc="./icons/hike.png"/>
    </div>
    const detailsUseful = <div>
        <a href="https://goo.gl/maps/883hx6pWFVmwTHEE6" target='_blank'><img src="./icons/parking.png"></img></a>
        <p>
            <a href="https://goo.gl/maps/883hx6pWFVmwTHEE6" target='_blank'><b><Text english="" french="Parking gratuit" /></b></a>
            <Text english="" french=" à 15 min à pied du centre ville d'Ajaccio en longeant la mer. À côté, " />
            <a href="https://goo.gl/maps/43zKqMnspMNSsXWs5" target='_blank'><Text english="" french="le parking de la Place Miot"/></a>
            <Text english="" french=" est en zone longue durée, ce qui signifie que le stationnement est payant de 9h-12h et de 14h-19h30 pour un tarif de  50ct/heure et une durée limitée à 8h30 maximum." />
        </p>
        <a href="https://goo.gl/maps/883hx6pWFVmwTHEE6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <p>
            <a href="https://www.ajaccio-tourisme.com/" target='_blank'><b><Text english="Tourist office" french="L’office de tourisme" /></b>
            <Text english="" french=" du pays d’Ajaccio" /></a>
        </p>
        <a href="https://goo.gl/maps/xNSQqKgStDGy4abBA" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://www.ajaccio-tourisme.com/" target='_blank'><img src="./icons/website.png"></img></a>
        <br></br>
        <br></br>
        <p>
            <Text english="The only " french="Seul " />
            <b><Text english="Decathlon" french="Decathlon" /></b>
            <Text english=" on the island" french=" de l'île" />
        </p>
        <a href="https://goo.gl/maps/GdkcmhiHNnPdBM2c8" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <p>
            <a href="https://www.grandsitesanguinaires-parata.com/" target='_blank'><b><Text english="" french="Site de la Pointe de la Parata et des Îles Sanguinaires" /></b></a>
        </p>
        <a href="https://goo.gl/maps/sCeZcYW24TejFKyDA" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://www.grandsitesanguinaires-parata.com/" target='_blank'><img src="./icons/website.png"></img></a>
    </div>

    return(
        <div className={`day-one`}>
            <Day dayNumber={1} 
                 introEnglishTitle="Ajaccio" introFrenchTitle="Ajaccio"
                 introEnglishText="" introFrenchText="Ajaccio, ou Aiacciu en Corse, est la préfecture du département de la Corse du Sud et de la région Corse. Elle compte un peu plus de 100 000 habitants et est dotée d’un grand port et d’un aéroport, ce qui en fait un point de départ pratique pour beaucoup de vacanciers."
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
            />
        </div>
    );
}

export default DayOne;