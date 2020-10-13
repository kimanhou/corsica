import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import './DayTwo.scss';

interface IDayTwoProps {
}

const DayTwo : React.FC<IDayTwoProps> = props => {
    const introText = <p>
        <b><Text english="Sartene" french="Sartène" /></b>
        <Text english="" french=" est, par sa superficie de 200 km², la plus grande commune de Corse et compte environ 3 000 habitants. À son sujet, Prosper Mérimée, écrivain, historien et archéologue du 19e siècle, a écrit " />
        <b><Text english="" french="“la plus corse des villes corses“" /></b>
        <Text english="" french=". Située à 80 km d'Ajaccio sur la route de Bonifacio, elle incarne l'âme authentique de la Corse profonde, avec tout de même une lourde histoire de piraterie et de banditisme."/>
        <br></br>
        <b><Text english="" french="Le site de Roccapina" /></b>
        <Text english="One of my favourite spots in Corsica" french=", malgré les 22 km de distance qui le sépare du centre ville, appartient à la commune de Sartène. Le combo plage de sable fin + randonnée avec panorama à la clé en fait un de mes lieux favoris en Corse."/>
    </p>;
    const detailsMorning = <p>
        <Text english="" french="Perchée sur son rocher au milieu des montagnes, la cité médiévale de Sartène surplombe la vallée du Rizzanèse. Le cœur du village, tout en granit gris, s'organise autour de la place de la Libération, anciennement " />
        <i><Text english="" french="Place Porta" /></i>
        <Text english="" french=", dominée au Nord par la mairie, ancien Palais du Gouverneur sous l'occupation génoise, et par l'église. À son extrémité, on trouve l'esplanade Pasquale Paoli. La vieille ville regorge de passages voûtés et de ruelles pittoresques pavées de belles dalles de granit. L'échauguette constitue le dernier vestige de la muraille qui s'y trouvait jadis. Une demie journée suffit pour apprécier l'ambiance de ce village rempli d'histoire et de traditions, admirer la vue sur la vallée et flâner dans la vieille ville." />
    </p>
    const detailsAfternoon = <div>
        <p>
            <Text english="" french="À 40 min de voiture au sud de Sartène sur la route de Bonifacio, le site de " />
            <b><Text english="Roccapina" french="Roccapina" /></b>
            <Text english="" french=" se caractérise par ses rochers, en particulier le Lion de Roccapina qui surplombe la baie, sa plage de sable fin et sa tour génoise. Pour y accéder, il faut conduire 20 min jusqu'à l'auberge Coralli. Là, " />
            <b><Text english="" french="4km de piste difficilement carrossable" /></b>
            <Text english="" french=" vous attendent pour descendre vers la mer. Deux options possibles :" />
            <ul>
                <li><Text english="" french="- laisser la voiture ici et marcher 45 min (1h pour le retour, ca monte !) sous le soleil et dans les nuages de poussière des autres voitures"/></li>
                <li><Text english="" french="- emmener la voiture de location flambant neuve sur le chemin de terre sans savoir si elle remontera un jour. Un parcours de 20 bonnes minutes pendant lesquelles les multiples clauses de votre contrat de location défilera devant vos yeux à chaque secousse."/></li>
            </ul>
            <Text english="" french="Nous sommes descendus en voiture et n'avons eu à déplorer aucun incident mais le conducteur a beaucoup transpiré. Deux parkings se situent de part et d'autre de la plage, ainsi que plusieurs emplacements sur le chemin pour ceux qui préfèrent abandonner avant la fin." />
            <br></br>
            <Text english="" french="Qu'importe l'option que vous avez choisie, vos efforts seront récompensés par "/>
            <b><Text english="" french="la magnifique plage de sable fin et l'eau calme et cristalline" /></b>
            <Text english="" french=". Si le farniente n'est pas votre activité préférée, vous pouvez monter à "/>
            <b><a href="https://goo.gl/maps/kiXm84U4Wd88PZXx5" target='_blank'><Text english="" french="la tour génoise"/></a></b>
            <Text english="" french=" en un bon quart d'heure où vous attend un sublime panorama. De là, il est possible de redescendre par l'autre versant pour rejoindre "/>
            <b><a href="https://goo.gl/maps/S1VnzKRiMC16QEKd9" target='_blank'><Text english="" french="la plage d'Erbaju" /></a></b>
            <Text english="" french=", 3,5 km de sable blanc totalement déserts. Le sable y est moins fin et il y a plus de vent donc de vagues, mais contrairement à la plage de Roccapina, il n'y a absolument personne. Il faut compter "/>
            <b><Text english="1h walk" french="1h de marche" /></b>
            <Text english="" french=" pour aller d'une plage à l'autre."/>
        </p>
    </div>
    const detailsUseful = <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/BB1rDZ1XXCQ2csMy7" target='_blank'><Text english="1h30 drive from Ajaccio" french="1h30 de route depuis Ajaccio" /></a>
            <br></br>
            <a href="https://goo.gl/maps/5YVXcQR8Yij7Sr8b7" target='_blank'><Text english="40 min drive to Roccapina beach" french="40 min de route jusqu'à la plage de Roccapina" /></a>
            <br></br>
            <a href="https://goo.gl/maps/oqmHwR42LELwDBrD9" target='_blank'><Text english="1h drive to Bonifacio" french="1h de route jusqu'à Bonifacio" /></a>
        </p>
        <br></br>
        <br></br>
        <a href="https://goo.gl/maps/CoJ9PmqxV4M3sNf97" target='_blank'><img src="./icons/parking.png"></img></a>
        <p>
            <a href="https://goo.gl/maps/CoJ9PmqxV4M3sNf97" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" only 5 min walk from the city center" french=" à 5 min à pied du centre ville de Sartène" />
        </p>
        <a href="https://goo.gl/maps/CoJ9PmqxV4M3sNf97" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/3hb4XJzcANK9ewsP8" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" West of Roccapina beach" french=" à l'ouest de la plage de Roccapina" />
        </p>
        <a href="https://goo.gl/maps/3hb4XJzcANK9ewsP8" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/PgV3PLH9NfVf3h7Z6" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" East of Roccapina beach" french=" à l'est de la plage de Roccapina" />
        </p>
        <a href="https://goo.gl/maps/PgV3PLH9NfVf3h7Z6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <p>
            <a href="https://lacorsedesorigines.com/" target='_blank'><Text english="Tourist office" french="L’office de tourisme de Sartène" /></a>
        </p>
        <a href="https://goo.gl/maps/RmxqoX6wRNsvmoc19" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://lacorsedesorigines.com/" target='_blank'><img src="./icons/website.png"></img></a>
        <br></br>
        <p>
            <Text english="On the tourist office website, you can find" french="Sur le site de l'office de tourisme, on trouve notamment "/>
            <a href="https://lacorsedesorigines.com/wp-content/uploads/sites/1/2020/10/plan-territoire-definitif.pdf" target='_blank'><Text english="the map of the region and " french="la carte du territoire du Sartenais Valinco Taravo ainsi que " />
            <b><Text english="the map of Sartene old town" french="le plan de Sartène"/></b>
            <Text english=", Propriano and Olmeto." french=", Propriano et Olmeto."/></a>
        </p>
        <br></br>
        <p>
            <Text english="There is also a " french="Il y a aussi un "/>
            <b><a href="https://lacorsedesorigines.com/wp-content/uploads/sites/1/2020/01/guide-touristique-ot-svt_2020_web-5.pdf" target='_blank'><Text english="guide of the region." french="guide touristique de la région." /></a></b>
        </p>
    </div>

    return(
        <div className={`day-two`}>
            <Day dayNumber={2} 
                 introEnglishTitle="Sartene and Roccapina" introFrenchTitle="Sartene et Roccapina"
                 introText={introText}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"visit of Sartene old town"} programFrenchMorning={"visite du centre ville de Sartène"} 
                 programEnglishAfternoon={"beach time on Roccapina beach and optional hike "} programFrenchAfternoon={"plage de Roccapina et randonnée possible"}
            />
        </div>
    );
}

export default DayTwo;