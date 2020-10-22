import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import './DayTwo.scss';
import Map from './Map';

interface IDayTwoProps {
}

const DayTwo : React.FC<IDayTwoProps> = props => {
    const introText = <p>
        <b><Text english="Sartene" french="Sartène" /></b>
        <Text english=" is the largest city in Corsica in terms of surface with an area of 200 km² and has about 3,000 inhabitants. Propers Merimee, a French writer from the 19th century, called it " french=" est, par sa superficie de 200 km², la plus grande commune de Corse et compte environ 3 000 habitants. À son sujet, Prosper Mérimée, écrivain, historien et archéologue du 19e siècle, a écrit " />
        <b><Text english="“the most Corsican of Corsican towns“" french="“la plus corse des villes corses“" /></b>
        <Text english=". Located 80 km from Ajaccio on the road to Bonifacio, it embodies the authentic soul of Corsica, with a heavy history with piracy and banditry." french=". Située à 80 km d'Ajaccio sur la route de Bonifacio, elle incarne l'âme authentique de la Corse profonde, avec tout de même une lourde histoire de piraterie et de banditisme."/>
        <br></br>
        <b><Text english="The site of Roccapina" french="Le site de Roccapina" /></b>
        <Text english=", in spite of being located 22 km away from the city center, belongs to the city of Sartene. The combo paradise beach + hike with a view makes it one of my favourite spots in Corsica." french=", malgré les 22 km de distance qui le sépare du centre ville, appartient à la commune de Sartène. Le combo plage de sable fin + randonnée avec panorama à la clé en fait un de mes endroits favoris en Corse."/>
    </p>;
    const detailsMorning = <p>
        <Text english="Perched on its rock in the middle of the moutains, the medieval city of Sartene overlooks the Rizzanese valley. The heart of the village, all in gray granite, is organized around the " french="Perchée sur son rocher au milieu des montagnes, la cité médiévale de Sartène surplombe la vallée du Rizzanèse. Le cœur du village, tout en granit gris, s'organise autour de la place de la Libération, anciennement " />
        <i><Text english="Place de la Libération" french="" /></i>
        <Text english=", formerly " french="" />
        <i><Text english="Place Porta" french="Place Porta" /></i>
        <Text english=", which is dominated to the north by the town hall, former Palace of the Governor under the Genoese occupation, and by the church. At its end is the Pasquale Paoli esplanade. The old town is full of arched passages and picturesque alleys paved with beautiful granite slabs. The watchtower is the last vestige of the wall that once stood there. Half a day is enough to appreciate the atmosphere of this village filled with history and traditions, admire the view over the valley and stroll through the old town." french=", dominée au Nord par la mairie, ancien Palais du Gouverneur sous l'occupation génoise, et par l'église. À son extrémité, on trouve l'esplanade Pasquale Paoli. La vieille ville regorge de passages voûtés et de ruelles pittoresques pavées de belles dalles de granit. L'échauguette constitue le dernier vestige de la muraille qui s'y trouvait jadis. Une demie journée suffit pour apprécier l'ambiance de ce village rempli d'histoire et de traditions, admirer la vue sur la vallée et flâner dans la vieille ville." />
    </p>
    const detailsAfternoon = <div>
        <p>
            <Text english="40 minutes by car south of Sartene on the road to Bonifacio, lies the site of " french="À 40 min de voiture au sud de Sartène sur la route de Bonifacio, le site de " />
            <b><Text english="Roccapina" french="Roccapina" /></b>
            <Text english=", which is easily recognizable by its rocks, especially the Lion of Roccapina overlooking the bay, its sandy beach and its Genoese tower. To get there, you have to drive 20 minutes to the Coralli Inn. There, " french=" se caractérise par ses rochers, en particulier le Lion de Roccapina qui surplombe la baie, sa plage de sable fin et sa tour génoise. Pour y accéder, il faut conduire 20 min jusqu'à l'auberge Coralli. Là, " />
            <b><Text english="4 km of difficult track" french="4 km de piste difficilement carrossable" /></b>
            <Text english=" awaits you to get down to the beach. Two possible options :" french=" vous attendent pour descendre vers la mer. Deux options possibles :" />
            <ul>
                <li><Text english="- leave the car here and walk 45 min (1 hour for the return trip, it goes up!) under the sun and in the dust clouds of other cars." french="- laisser la voiture ici et marcher 45 min (1h pour le retour, ca monte !) sous le soleil et dans les nuages de poussière des autres voitures."/></li>
                <li><Text english="- take the brand new rental car down the dirt road not knowing if it will ever get back up. It's a bumpy ride of 20 good minutes during which the multiple clauses of your rental contract will pass before your eyes with each jerk." french="- emmener la voiture de location flambant neuve sur le chemin de terre sans savoir si elle remontera un jour. Un parcours de 20 bonnes minutes pendant lesquelles les multiples clauses de votre contrat de location défilera devant vos yeux à chaque secousse."/></li>
            </ul>
            <Text english="We drove down and didn't have any incidents but the driver sweated a lot. Two car parks are located on either side of the beach, as well as several parking spots along the way for those who would rather give up before the end." french="Nous sommes descendus en voiture et n'avons eu à déplorer aucun incident mais le conducteur a beaucoup transpiré. Deux parkings se situent de part et d'autre de la plage, ainsi que plusieurs emplacements sur le chemin pour ceux qui préfèrent abandonner avant la fin." />
            <br></br>
            <Text english="No matter which option you choose, your efforts will be rewarded with " french="Qu'importe l'option que vous avez choisie, vos efforts seront récompensés par "/>
            <b><Text english="the magnificent sandy beach and calm crystal clear water" french="la magnifique plage de sable fin et l'eau calme et cristalline" /></b>
            <Text english=". If lazing around is not your favorite hobby, you can go up to " french=". Si le farniente n'est pas votre activité préférée, vous pouvez monter à "/>
            <b><a href="https://goo.gl/maps/kiXm84U4Wd88PZXx5" target='_blank'><Text english="the Genoese tower" french="la tour génoise"/></a></b>
            <Text english=" in a good quarter of an hour where a sublime panorama awaits you. From there, it is possible to go down the other side to reach " french=" en un bon quart d'heure où vous attend un sublime panorama. De là, il est possible de redescendre par l'autre versant pour rejoindre "/>
            <b><a href="https://goo.gl/maps/S1VnzKRiMC16QEKd9" target='_blank'><Text english="Erbaju beach" french="la plage d'Erbaju" /></a></b>
            <Text english=", a 3.5 km long totally deserted strip of white sand. The sand is less fine and there is more wind and therefore waves, but unlike Roccapina beach, there is absolutely no one. It takes " french=", 3,5 km de sable blanc totalement déserts. Le sable y est moins fin et il y a plus de vent donc de vagues, mais contrairement à la plage de Roccapina, il n'y a absolument personne. Il faut compter "/>
            <b><Text english="an hour of walk" french="1h de marche" /></b>
            <Text english=" to get from one beach to the other." french=" pour aller d'une plage à l'autre."/>
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
            <Text english=" only 5 min walk from the city center of Sartene" french=" à 5 min à pied du centre ville de Sartène" />
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
        <img src="./icons/info.png"></img>
        <p>
            <a href="https://lacorsedesorigines.com/" target='_blank'><Text english="Tourist office" french="L’office de tourisme de Sartène" /></a>
        </p>
        <a href="https://goo.gl/maps/RmxqoX6wRNsvmoc19" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://lacorsedesorigines.com/" target='_blank'><img src="./icons/website.png"></img></a>
        <br></br>
        <p>
            <Text english="On the tourist office website, you can find " french="Sur le site de l'office de tourisme, on trouve notamment "/>
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
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"visit of Sartene old town"} programFrenchMorning={"visite du centre ville de Sartène"} 
                 programEnglishAfternoon={"beach time on Roccapina beach and optional hike "} programFrenchAfternoon={"plage de Roccapina et randonnée possible"}
            />
        </div>
    );
}

export default DayTwo;