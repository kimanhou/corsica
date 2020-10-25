import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayEleven.scss';
import Map from './Map';

interface IDayElevenProps {
}

const DayEleven : React.FC<IDayElevenProps> = props => {
    const introText = 
    <p>
        <Text english="The day is devoted to the discovery of the northwest coast of Corsica. From Saint Florent to Île Rousse, via Agriates Desert, the day's program is packed!" 
              french="La journée est consacrée à la découverte de la côte Nord-Ouest de la Corse. De Saint-Florent à l'Île Rousse, en passant par le Désert des Agriates, le programme de la journée est chargé !" />
    </p>;
    const detailsMorning = 
    <p>
        <h2><Text english="Agriates Desert" french="Desert des Agriates" /></h2>
        <br></br>
        <Text english="Agriates Desert covers an area of ​​15,000 hectares between sea and mountains. In fact, it is not really a desert, but rather an area of ​​wild land where rocky ridges meet valleys covered with dense Mediterranean " 
              french="Le Désert des Agriates s'étend sur une superficie de 15 000 hectares entre mer et montagne. En fait, ce n'est pas vraiment un désert, mais plutôt une zone de terre sauvage où les crêtes rocheuses rencontrent des vallées couvertes de maquis méditerranéens denses." />
        <i><Text english="maquis." french="" /></i>
        <br></br>
        <Text english="There are 2 main ways to visit Agriates Desert: take the boat to the beaches of" french="Il y a 2 moyen principaux de visiter le désert des Agriates : prendre le bateau jusqu'aux plages de " />
        <a href="https://goo.gl/maps/Fi7PRRQJ4nBaDwGr9" target='_blank'><b><Text english="" french="Saleccia" /></b></a>
        <Text english="" french=" et " />
        <a href="https://goo.gl/maps/y1rCSN927y6ASbfY7" target='_blank'><b><Text english="" french="Lotu" /></b></a>
        <Text english=" or on foot via the " french=" ou à pied par le " />
        <b><Text english="" french="sentier du littoral" /></b>
        <b><i><Text english="sentier du littoral" french="" /></i></b>
        <Text english=" which goes along the coast." french=" qui longe la côte." />
        <br></br>
        <br></br>
        <h3><Text english="By boat" french="Par bateau" /></h3>
        <Text english="There are a dozen companies offering regular shuttles to " french="Il existe une douzaine de compagnies offrant des navettes régulières rejoignant les " />
        <b><Text english="Lotu and Saleccia beaches" french="plages de Lotu et Saleccia" /></b>
        <Text english=" departing from Saint Florent. The round trip costs around 30€ per person depending on the beach you choose. Saleccia beach being further away, the ticket to access it is naturally more expensive." french=" depuis Saint-Florent. L'aller-retour coûte environ 30€ par personne selon la plage que vous choisissez. La plage de Saleccia étant plus éloignée, le billet pour y accéder est naturellement plus cher." />
        <br></br>
        <Text english="Between Lotu beach and Saleccia beach, there is 1h walk inland and 1h30 along the coast. It is possible to go by boat to one, hike to the other and catch the boat from the other beach." french="Entre la plage de Lotu et la plage de Saleccia, il y a 1h de marche par l'intérieur des terres et 1h30 en longeant la côte. Il est possible d'aller en bateau à l'une, faire la randonnée jusqu'à l'autre et reprendre le bateau de l'autre plage." />
        <br></br>
        <br></br>
        <h3><Text english="By foot" french="À pied" /></h3>
        <Text english="The " french="Le " />
        <a href="https://goo.gl/maps/BRioZyLqGZ3jKVwU9" target='_blank'><b><Text english="starting point" french="point de départ" /></b></a>
        <Text english=" of the hike is located 15 min drive from the city center of Saint Florent, including 1km of easily drivable track. The " french=" de la randonnée se trouve à 15 min en voiture du centre ville de Saint-Florent, dont 1km de piste facilement carrossable. Le " />
        <b><Text english="" french="sentier du littoral" /></b>
        <b><i><Text english="sentier du littoral" french="" /></i></b>
        <Text english=", also called " french=", également appelé sentier des douaniers, rejoint la plage de l'Ostriconi en plus ou moins 8h. Il est évidemment possible et recommandé de ne pas aller jusqu'au bout et de faire demi-tour bien plus tôt, par exemple à la " />
        <i><Text english="sentier des douaniers" french="" /></i>
        <Text english=" reaches Ostriconi beach in more or less 8 hours. It is obviously possible and recommended not to go to the end and to turn around much earlier, for example at the " french="" />
        <a href="https://goo.gl/maps/U3hyFCuZWeveNqwz8" target='_blank'><Text english="Mortella Tower" french="tour de Mortella" /></a>
        <Text english=" which you reach after 2 hours of walking." french=" qu'on atteint au bout de 2 heures de marche." />
        <br></br>
        <Text english="To get to Lotu beach on foot, it takes about 4 hours from Saint Florent, obviously a little less from the starting point given above." french="Pour aller à la plage de Lotu à pied, il faut environ 4 heures depuis Saint-Florent, évidemment un peu moins depuis le point de départ donné ci-dessus." />
        <br></br>
        <br></br>
        <br></br>
        <h2><Text english="Saint Florent" french="Saint Florent" /></h2>
        <br></br>
        <Text english="The city center of Saint Florent is centered around the port, the Route Neuve which folds in on itself and the Place Doria, which is more of a street than a square. A multitude of restaurants will delight visitors. At the end of Place Doria, an " french="Le centre ville de Saint-Florent se concentre autour du port, de la Route Neuve qui se replit sur elle-même et de la Place Doria, qui est plus une rue qu'une place. Une multitude de restaurants raviront les visiteurs. Au bout de la Place Doria, une " />
        <a href="https://goo.gl/maps/Kn8fAfUT4DPbd9mt9" target='_blank'><b><Text english="esplanade" french="esplanade" /></b></a>
        <Text english=" offers a beautiful view of the city center. Just behind is the " french=" offre une belle vue sur le centre ville. Juste derrière se trouve la " />
        <a href="https://goo.gl/maps/Sqt8KVQMNuEZf6CM8" target='_blank'><b><Text english="citadel" french="citadelle" /></b></a>
        <Text english=" of Saint Florent." french=" de Saint-Florent." />
        <br></br>
    </p>
    const detailsAfternoon = <div>
        <p>
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
            <h2><Text english="Ile Rousse" french="Ile Rousse" /></h2>
            <br></br>
            <Text english="The city center of Ile Rousse is organised around " french="Le centre ville de l'Île Rousse est organisé autour de la " />
            <b><Text english="Paoli Square" french="Place Paoli" /></b>
            <Text english=", from which start 3 shopping streets including a pedestrian one, " french=", à partir de laquelle partent 3 rues commerçantes dont une piétonne, la " />
            <b><Text english="Napoleon street" french="rue Napoléon" /></b>
            <Text english=". " french=". La " />
            <b><Text english="Marinella Promenade" french="Promenade de la Marinella" /></b>
            <Text english=", which runs along the beach, offers a beautiful walk to the statue of the " french=", qui longe la plage, offre une belle balade jusqu'à la statue de la " />
            <b><Text english="little mermaid." french="petite sirène." /></b>
            <br></br>
            <br></br>
            <br></br>
            <h2><Text english="Pietra Island" french="Ile de la Pietra" /></h2>
            <br></br>
            <Text english="It is accessed by the Pietra dike on foot, by car or by the little tourist train. From the city center, it only takes a 15-minute walk to reach the ocher-colored island." french="On y accède par la digue de la Pietra à pied, en voiture ou par le petit train touristique. Depuis le centre ville, il ne faut que 15 min de marche pour rejoindre l'île de couleur ocre." />
            <br></br>
            <Text english="We pass by the ferry terminal before going up to " french="On passe à côté de la gare maritime de l'Île Rousse avant de monter jusqu'au " />
            <a href="https://goo.gl/maps/QmSxW73Df1dbv2Jx9" target='_blank'><Text english="Pietra Lighthouse" french="phare de la Pietra" /></a>
            <Text english=". At its summit you can admire the coastline of Balagne, from Calvi to Pointe de l'Agriate, the ideal place to contemplate the sunset." french=". À son sommet on peut y admirer le littoral de Balagne, de Calvi jusqu’à la pointe de l’Agriate, l'endroit idéal pour contempler le coucher de soleil." />
        </p>
    </div>
    const detailsUseful = <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/QmSxW73Df1dbv2Jx9" target='_blank'><Text english="40 min drive from Bastia to Saint Florent" french="40 min de route de Bastia à Saint-Florent" /></a>
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/v2tGTMA5u9RqwtWk9" target='_blank'><Text english="1h drive from Saint Florent to Ile Rousse" french="1h de route de Saint-Florent à l'Île Rousse" /></a>
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/fgKoMpmg1549C5Ju9" target='_blank'><Text english="30 min drive from Ile Rousse to Calvi" french="30 min de route de l'Île Rousse à Calvi" /></a>
        </p>
        <br></br>
        <br></br>
        <img src="./icons/parking.png"></img>
        <p>
            <b><Text english="Saint Florent : Free parking" french="Saint-Florent : Parking gratuit" /></b>
            <a href="https://goo.gl/maps/g4vbB17E17RiawHP6" target='_blank'><Text english=" at the port" french=" au port" /></a>
            <a href="https://goo.gl/maps/g4vbB17E17RiawHP6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
            <Text english=" and " french=" et " />
            <a href="https://goo.gl/maps/29jPe2mxhpLT9DN16" target='_blank'><Text english="at the citadelle" french="à la citadelle" /></a>
            <a href="https://goo.gl/maps/29jPe2mxhpLT9DN16" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/Q45fNToi8s4RaECN8" target='_blank'><b><Text english="Île Rousse : Paid parking" french="Île Rousse : Parking payant" /></b></a>
            <Text english=" at the post office. It's free for the first 30 min in high season, 1h in low season. Then the prices are quite reasonable (2.20€ / 2h ; 3€ / 3h ; 3.80€ / 4h)" 
                  french=" de la Poste. C'est gratuit pour les 30 premières minutes en saison haute, 1h en saison basse. Ensuite les prix sont raisonnables (2,20€ / 2h ; 3€ / 3h ; 3,80€ / 4h)" />
        </p>
        <a href="https://goo.gl/maps/Q45fNToi8s4RaECN8" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/opg8dvjjQk5nAXja7" target='_blank'><b><Text english="Calvi : Free parking" french="Calvi : Parking gratuit" /></b></a>
            <Text english=" at Super U" french=" au Super U" />
        </p>
        <a href="https://goo.gl/maps/opg8dvjjQk5nAXja7" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <img src="./icons/info.png"></img>
        <p>
            <a href="http://www.corsica-saintflorent.com/" target='_blank'>
                <b><Text english="Tourist office " french="L’office de tourisme " /></b>
                <Text english="of Saint Florent" french=" de Saint-Florent" />
            </a>
        </p>
        <a href="https://goo.gl/maps/grJ3BDjaxheHbMso9" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="http://www.corsica-saintflorent.com/" target='_blank'><img src="./icons/website.png"></img></a>
        <br></br>
        <p>
            <a href="https://balagne-corsica.com/" target='_blank'>
                <b><Text english="Tourist office" french="L’office de tourisme" /></b>
                <Text english=" of Ile Rousse - Balagne" french=" de l'Île Rousse - Balagne" />
            </a>
        </p>
        <a href="https://goo.gl/maps/bBQk83FpH9jJ2Gy86" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="https://balagne-corsica.com/" target='_blank'><img src="./icons/website.png"></img></a>
        <br></br>
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
        <br></br>
        <br></br>
        <img src="./icons/ferry.png"></img>
        <p>
            <Text english="A couple of " french="Quelques " />
            <b><Text english="boat companies" french="compagnies de bateau" /></b>
            <Text english=" going to Lotu and Saleccia beaches :" french=" offrant des navettes jusqu'aux plages de Lotu et de Saleccia :" />
            <br></br>
            <a href="https://www.lepopeye.com/" target='_blank'><Text english=" - Le Poppeye" french=" - Le Poppeye" /></a>
            <br></br>
            <a href="https://www.taxiboat-saintflorent.com/" target='_blank'><Text english=" - Taxi Boat" french=" - Taxi Boat" /></a>
        </p>
    </div>

    return(
        <div className={`day-eleven`}>
            <Day dayNumber={11}
                 introEnglishTitle="From Saint Florent to Ile Rousse" introFrenchTitle="De Saint Florent a l Ile Rousse"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"Agriates Desert, lunch in Saint Florent"} programFrenchMorning={"Désert des Agriates, déjeuner à Saint-Florent"} 
                 programEnglishAfternoon={"visit of Ile Rousse"} programFrenchAfternoon={"visite de l'Île Rousse"}
            />
        </div>
    );
}

export default DayEleven;