import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day, { IPhotoData } from '../Day';
import './DayThree.scss';
import Map from './Map';

interface IDayThreeProps {
}

const DayThree : React.FC<IDayThreeProps> = props => {
    const introText = 
    <p>
        <b><Text english="Bonifacio" french="Bonifacio" /></b>
        <Text english=", or " french=", ou " />
        <i><Text english="Bunifaziu" french="Bunifaziu"/></i>
        <Text english=" in Corsica, is the jewel of South Corsica. Nicknamed " french=" en Corse, est le joyau de la Corse du Sud. Surnommée " />
        <i><Text english="the city of cliffs" french="la cité des falaises"/></i>
        <Text english=", this must-see in Corsica impresses with its geographical location, perched on the side of a cliff on a white limestone stone that contrasts with the blue of the sea. A thousand-year-old city, the upper town is as beautiful to visit inside its ramparts as it does from the outside, especially from " french=", cet incontournable de Corse impressionne par sa situation géographique, perchée à flanc de falaise sur une pierre de calcaire blanche qui contraste avec le bleu de la mer. Cité millénaire, la ville haute est aussi belle à visiter à l'intérieur de ses remparts que de l'extérieur, notamment depuis " />
        <b><Text english="the " french="le sentier du " />
        <i><Text english="Campu Rumanilu" french="Campu Rumanilu" /></i>
        <Text english=" hike" french="" /></b>
        <Text english=", which offers breathtaking views of the city and its surroundings." french=", qui offre une vue imprenable sur la cité et ses alentours." />
    </p>;
    const detailsMorning = <p>
        <Text english="A visit of Bonifacio traditionally starts with " french="La visite de Bonifacio commence par " />
        <b><Text english="the marina" french="le port de plaisance" /></b>
        <Text english=" where small fishing boats and luxurious billionaire yachts anchor quietly, the ramparts of the upper town are in the background luring you to them." french=" où mouillent tranquillement petits bateaux de pêcheurs et luxueux yachts de milliardaires, avec les remparts de la ville haute en arrière plan." />
        <br></br>
        <Text english="To get to the upper town, the most pitturesque way is to take the " french="Pour partir à l'assaut de la citadelle, nous vous conseillons de prendre la " />
        <a href="https://goo.gl/maps/TvHNgxHEWUQvaxfT6" target='_blank'><b>
            <i><Text english="montée de Rastello" french="" /></i>
            <Text english="" french="montée de Rastello" />
        </b></a>
        <Text english="" french=". Les Bonifaciens l'appellent "/>
        <i><Text english="" french="la grimpette"/></i>
        <Text english=", and yes it's going up ! It is a stepped street lined with pretty shops and restaurants, which leads to the foot of the ramparts. Your efforts will be rewarded by an awesome view on the sea. On your left is the starting point of " french=", et pour cause c'est une rue toute en escaliers bordée de jolies boutiques et de restaurants qui mène au pied des remparts. En haut, vous servez récompensé par une vue magnifique sur la mer. Sur votre gauche se trouve le point de départ du sentier "/>
        <i><Text english="Campu Rumanilu" french="Campu Rumanilu"/></i>
        <Text english=" hike, on your right is more climbing up to the entrance of the citadel : the famouse " french=", sur votre droite une ultime montée en zig zag vous conduit à l'entrée de la citadelle : la célèbre "/>
        <b><Text english="Genoa Gate" french="Porte de Gênes"/></b>
        <Text english="." french="."/>
        <br></br>
        <Text english="You can stop by the tourist office to pick up extra info and buy your tickets to the " french="Vous pouvez vous arrêter à l'office de tourisme pour y recueillir des informations supplémentaires et acheter vos billets pour le "/>
        <b><Text english="Bastion of the Standard" french="Bastion de l'Étendard"/></b>
        <Text english=" and the " french=" et les "/>
        <b><Text english="King of Aragon staircase" french="Escaliers du Roy d'Aragon"/></b>
        <Text english=". Prices are as below:" french=". Les tarifs sont ci-dessous :"/>
        <ul>
            <li><Text english="Pass Monument (Bastion of the Standard + Stairs of King Aragon) : 4.50€" french="Pass Monument (Bastion de l'Étendard + Escaliers du Roy d'Aragon) : 4,50€" /></li>
            <li><Text english="Bastion of the Standard only : 3.50€" french="Bastion de l'Étendard seul : 3,50€" /></li>
            <li><Text english="King of Aragon staircase only : 3.50€" french="Escaliers du Roy d'Aragon seuls : 3,50€" /></li>
        </ul>
        <Text english="The centerpiece of the fortifications, the " french="Pièce maîtresse des fortifications, le "/>
        <a href="https://goo.gl/maps/C8MTj2f2H6nHQpdKA" target='_blank'><Text english="Bastion of the Standard" french="Bastion de l'Étendard"/></a>
        <Text english=" dominates the port from its height of 25 meters. In the underground rooms, partly dug in the rock, an exhibition traces the history of the city's fortifications. Outside, a course of ten viewpoints invites the visitor to contemplate the plunging views of the port and the panoramas of the cliffs and Sardinia. Allow one hour for the complete visit."  
              french=" domine le port du haut de ses 25 mètres. Dans les salles souterraines, en partie creusées dans le roc, une exposition retrace l'histoire des fortifications de la ville. À l'extérieur, un parcours de dix points de vue invite le visiteur à contempler les vues plongeantes sur le port et les panoramas sur les falaises et la Sardaigne. Comptez une heure pour la visite complète." />
        <br></br>
        <Text english="" french="Les " />
        <a href="https://goo.gl/maps/VEdqhaTq7wPk3r4Y8" target='_blank'><Text english="King of Aragon staircase" french="Escaliers du Roy d'Aragon"/></a>
        <Text english=" is an unusual monument of the city of cliffs. It is a staircase of 187 (rather high) steps carved into the rock. Legend has it that it was built in a single night by the troops of the King of Aragon in 1402, but in fact monks were already using it before to fetch water. At the bottom of the steps, a path carved into the cliff just a few meters above the sea runs along the turquoise water to the Saint Barthelemy well, where visitors could once swim. Good physical condition is required and helmets are provided. The visit lasts about 30 min."
              french=" est un monument insolite de la cité des falaises. Il s'agit d'un escalier de 187 (plutôt grandes) marches creusé dans la roche. La légende raconte qu'il fut creusé en une seule nuit par les troupes du Roy d'Aragon en 1402, mais en fait des moines l'utilisaient déjà avant pour aller chercher de l'eau. Au bas des marches, un chemin creusé dans la falaise à quelques mètres à peine au-dessus de la mer long l'eau turquoise jusqu'au puits Saint Barthelemy, où les visiteurs pouvaient jadis se baigner. Une bonne condition physique et des chaussures fermées plates sont requis et des casques sont fournis. La visite dure environ 30 min." />
        <br></br>
        <Text english="Bonifacio's " french="La "/>
        <b><Text english="upper town" french="ville haute"/></b>
        <Text english=" is full of charming narrow and picturesque alleys. It is very easy and pleasant to walk there, discover the many churches and go to the marine cemetery, from which a breathtaking view of the gully amazes all visitors. There are also plenty of small cafes, restaurants and shops." 
              french=" de Bonifacio regorge de charmantes ruelles étroites et pittoresques. Il est très facile et agréable de s'y promener, découvrir les multiples églises et aller jusqu'au cimetière marin, duquel une vue imprenable sur le goulet émerveille tous les visiteurs. On y trouve également foison de petits cafés, restaurants et boutiques."/>
    </p>
    const detailsAfternoon = <div>
        <p>
            <Text english="Whether you are a savvy hiker or not, a walk on the " french="Que l'on soit un randonneur avisé ou pas, une balade sur le " />
            <b><Text english="Campu Rumanilu trail" french="sentier de Campu Rumanilu" /></b>
            <Text english=" is a must when visiting Bonifacio. To get to the starting point of this path, you have to leave the upper town by the Genoa gate and go down to the small white chapel (" french=" est un incontournable lors d'une visite de Bonifacio. Pour se rendre au point de départ de ce chemin, il faut ressortir de la ville haute par la porte de Gènes et redescendre jusqu'à la petite chapelle blanche (" />
            <a href="https://goo.gl/maps/zyk4QCzbBTfSQoBR7" target='_blank'><Text english="Saint Roch chapel" french="chapelle Saint-Roch" /></a>
            <Text english=") located halfway between the upper town and the port. From there, you have to climb a paved path to then find yourself on a bucolic path surrounded by nature with breathtaking views of the sea, 80 meters below. Scents of the maquis and stone balconies accompany the most seasoned hiker to the " french=") située à mi-chemin entre la Haute-Ville et le port. À partir de là, il faut gravir un chemin pavé pour se retrouver ensuite sur un sentier bucolique en plein nature sur les falaises avec des vues à couper le souffle sur la mer, 80 mètres en dessous. Senteurs du maquis et balcons empierrés accompagnent le randonneur le plus aguerri jusqu'au " />
            <a href="https://goo.gl/maps/KMDCv2aej4nHJPWd7" target='_blank'><Text english="Pertusato lighthouse" french="phare de Pertusato" /></a>
            <Text english=" . We stopped at this " french=" . Nous nous sommes arrêtés à ce " />
            <a href="https://goo.gl/maps/6Dzmt3a6Y5hSxXHZ7" target='_blank'><Text english="view point" french="point de vue" /></a>
            <Text english=" after an hour of walking, the uneven terrain and the multiple photo breaks made our progress much slower than expected. I reckon it would have taken us 3 hours to get to the lighthouse." french=" après une heure de marche, le terrain irrégulier et les multiples pauses photo rendant notre progression beaucoup plus lente que prévue. Je pense qu'il nous aurait fallu 3 heures pour atteindre le phare de Pertusato." />
        </p>
    </div>
    const detailsUseful = <div>
        <a href="https://goo.gl/maps/6KX9LWDN4RJiAC528" target='_blank'><img src="./icons/parking.png"></img></a>
        <p>
            <a href="https://goo.gl/maps/6KX9LWDN4RJiAC528" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" if you go to Lavezzi Islands the next day, you can park for free at one of SPMB's parking lots and buy tickets for the next day. Come back the next day for your boat tour, that way you have two days of free parking. Follow the signs “SPMB Promenades en mer“ for those parking lots. The one we parked in is here :" french=" si vous avez prévu une excursion aux Îles Lavezzi, nous vous conseillons de planifier votre visite de Bonifacio la veille. Vous pourrez ainsi vous stationner gratuitement dans les parkings mis à disposition par la SPMB ces deux jours. Il suffit de s'y rendre le premier jour, acheter les tickets pour l'excursion du lendemain et revenir le lendemain munis des tickets. Suivez les panneaux “SPMB Promenades en mer“ pour trouver ces parkings. Celui où nous nous sommes garés est là :" />
        </p>
        <a href="https://goo.gl/maps/6KX9LWDN4RJiAC528" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p><Text english="Monte Leone parking, which only costs 5€ for the day with a shuttle bus which transports visitors to the city, wasn't in use when we went." french="Le parking Monte Leone, qui ne coûte que 5€ la journée et équipé d'une navette reliant le port, n'était pas en service lors de notre visite."/></p>
        <a href="https://www.bonifacio.co.uk/organisme/parkings-of-bonifacio/" target='_blank'><Text english="Prices for all the parking lots here" french=""/></a>
        <br></br>
        <a href="https://www.bonifacio-mairie.fr/ma-commune/parkings/" target='_blank'><Text english="" french="Tous les tarifs ici"/></a>
        <br></br>
        <a href="https://parking-bonifacio.fr/index.php" target='_blank'><Text english="Live status of all the parking lots here" french="Le status des parkings ici"/></a>
        <br></br>
        <br></br>
        <img src="./icons/info.png"></img>
        <p>
            <a href="https://www.bonifacio.fr/" target='_blank'><b><Text english="Tourist office" french="L’office de tourisme" /></b>
            <Text english=" is located at the entrance of the upper town, right after the Genoa Gate. It also served as the ticket office for the Bastion of the Standard." french=" du Bastion de l'Étendard se trouve à l'entrée de la ville haute, à la porte de Gênes. Il fait également office de billeterie au Bastion de l'Étendard et on peut y acheter le pass monument." /></a>
        </p>
        <a href="https://goo.gl/maps/HN4Rd3MTuqurSaq57" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://www.bonifacio.fr/" target='_blank'><img src="./icons/website.png"></img></a>
        <br></br>
        <br></br>
        <p>
            <a href="https://www.bonifacio-mairie.fr/decouvrir-la-ville/tourisme/" target='_blank'><Text english="All the tourist offices in Bonifacio" french="Tous les offices de tourisme" /></a>
        </p>
        <br></br>
        <br></br>
        <p>
            <a href="https://www.bonifacio-mairie.fr/decouvrir-la-ville/histoire/" target='_blank'><Text english="" french="Histoire de Bonifacio" /></a>
        </p>
    </div>

    const photos : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'landscape'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'panorama'},
        {photoName : '7.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '8.jpg', gridItemType : 'landscape'},
        {photoName : '9.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'portrait'},
        {photoName : '11.jpg', gridItemType : 'portrait'},
        {photoName : '12.jpg', gridItemType : 'landscape'},
        {photoName : '13.jpg', gridItemType : 'portrait'},
        {photoName : '14.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '15.jpg', gridItemType : 'landscape'},
        {photoName : '16.jpg', gridItemType : 'portrait'},
        {photoName : '17.jpg', gridItemType : 'portrait'},
        {photoName : '18.jpg', gridItemType : 'portrait'},
        {photoName : '19.jpg', gridItemType : 'panorama'},
        {photoName : '20.jpg', gridItemType : 'portrait'},
        {photoName : '21.jpg', gridItemType : 'landscape'},
        {photoName : '22.jpg', gridItemType : 'landscape'},
        {photoName : '23.jpg', gridItemType : 'portrait'},
        {photoName : '24.jpg', gridItemType : 'portrait'},
        {photoName : '25.jpg', gridItemType : 'landscape'},
    ]

    return(
        <div className={`day-three`}>
            <Day dayNumber={3} 
                 introEnglishTitle="Bonifacio" introFrenchTitle="Bonifacio"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"visit of Bonifacio"} programFrenchMorning={"visite de Bonifacio"} 
                 programEnglishAfternoon={"Campu Rumanilu hike"} programFrenchAfternoon={"sentier du Campu Rumanilu"}
                 photos={photos}
            />
        </div>
    );
}

export default DayThree;