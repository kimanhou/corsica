import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day, { IPhotoData } from '../Day';
import IconAndText from '../IconAndText';
import './DayTen.scss';
import Map from './Map';

interface IDayTenProps {
}

const DayTen : React.FC<IDayTenProps> = props => {
    const introText = 
    <p>
        <Text english="" french="Le " />
        <b><Text english="Cap Corse" french="Cap Corse" /></b>
        <Text english=", also called « " french=", surnommé « " />
        <i><Text english="the island in the island" french="l'île dans l'île" /></i>
        <Text english=" », is a small piece of land facing the sea, which brings together all the authenticity and character of Corsica. After each bend, " french=" », est un petit bout de terre tourné vers la mer, véritable condensé de l'authenticité et du cachet de la Corse. Au détour de chaque virage, se révèlent de " />
        <b><Text english="magnificent landscapes with sea and maquis" french="magnifiques paysages entre mer et maquis" /></b>
        <Text english=" reveal themselves. Behind its wild and unspoiled beauty, Cap Corse contains picturesque villages, fishing seas, American houses, grain mills, Genoese towers and coastal paths." french=". Derrière sa beauté sauvage et préservée, le Cap Corse renferme des villages pittoresques, marines de pêcheurs, maisons des américains, moulins à grain, tours génoises et sentiers du littoral." />
        <br></br>
        <Text english="Going around Cap Corse in one day is possible but you would have to stay there at least 3 days to really do justice to this land full of priceless natural and heritage resources." french="Faire le tour du Cap Corse en une journée, c'est possible mais il faudrait y rester au moins 3 jours pour vraiment rendre justice à cette terre pleine de richesses naturelles et patrimoniales inestimables." />
    </p>;
    const detailsMorning = 
    <p>
        <Text english="Cap Corse has 18 municipalities, themselves often divided into hamlets. So choosing your stops is very complicated! We have selected here " french="Le Cap Corse comporte 18 communes, elles-mêmes souvent divisées en hameaux. Alors choisir ses arrêts est bien compliqué ! Nous avons retenu ici " />
        <b><Text english="5 essential stopovers" french="5 escales incontournables" /></b>
        <Text english=" + some bonus options." french=" + quelques options bonus." />
        <br></br>
        <br></br>
        <br></br>
        <h2><Text english="Erbalunga" french="Erbalunga" /></h2>
        <br></br>
        <Text english="It's a " french="C'est un " />
        <b><Text english="small village full of charm" french="petit village plein de charme" /></b>
        <Text english=" with picturesque alleys and pebble beaches. It has a tiny fishing port and one of the first Genoese towers in Cap Corse. There is a quiet and peaceful atmosphere that will make you want to take your time to stroll around." french=" aux ruelles pittoresques et aux plages de galets. Il est doté d'un minuscule port de pêche et de l'une des premières tours génoises du Cap Corse. Il y règne une ambiance tranquille et paisible qui vous donnera envie de prendre votre temps pour vous balader dans le village." />
        <br></br>
        <br></br>
        <Text english="Optional stops : Sisco and Rogliano." french="Arrêts bonus : Sisco et Rogliano." />
        <br></br>
        <br></br>
        <br></br>
        <h2><Text english="Macinaggio" french="Port de Macinaggio" /></h2>
        <br></br>
        <Text english="Bigger than Erbalunga but with less charm, it is a " french="Plus grand qu'Erbalunga mais avec moins de charme, c'est un " />
        <b><Text english="large marina" french="grand port de plaisance" /></b>
        <Text english=" lined with restaurants. A little further North, " french=" bordé de restaurants. Un peu plus au Nord, la " />
        <a href="https://goo.gl/maps/4CpBvd4TcaH2zq5N6" target='_blank'><Text english="Tamarone Beach" french="Plage de Tamarone" /></a>
        <Text english=" is a fine sandy beach with transparent water very frequented in high season but famous for being one of the most beautiful beaches of Cap Corse. It is possible to reach this beach on foot via the " french=" est une plage de sable fin et à l'eau transparente très fréquentée en haute saison mais réputée pour être l'une des plus belles plages du Cap Corse. Il est possible de rejoindre cette plage à pied par le sentier des douaniers." />
        <i><Text english="sentier des douaniers." french="" /></i>
        <br></br>
        <br></br>
        <br></br>
        <h2><Text english="Mattei Mill" french="Moulin Mattei" /></h2>
        <br></br>
        <Text english="A few kilometers before Centuri, at the top of the Col de la Serra, is the Moulin Mattei. We go there for " french="À quelques kilomètres avant Centuri, en haut du Col de la Serra, se trouve le Moulin Mattei. On y va pour " />
        <b><Text english="the view on the coast and on the village of Centuri" french="la vue sur la côte et le village de Centuri" /></b>
        <Text english=", more than for the mill itself. You can walk around the mill and take the path to the edge of the cliffs for an even more impressive view. However, it is cold and often cloudy. Cover yourself well before going up because the wind is strong at the top of the hill." french=", plus que pour le moulin en lui-même. On peut se balader autour du moulin et prendre le chemin vers le bord des falaises pour une vue encore plus impressionnante. Cependant, il y fait froid et souvent nuageux. Bien se couvrir avant de monter car le souffle fort en haut de la colline." />
        <br></br>
        <br></br>
        <br></br>
        <h2><Text english="Centuri" french="Centuri" /></h2>
        <br></br>
        <Text english="The port of Centuri is known for its " french="Le port de Centuri est connu pour sa " />
        <b><Text english="lobster fishing tradition" french="tradition de pêche à la langouste" /></b>
        <Text english=". It is therefore the ideal place to eat lobster or the fresh catch of the day in one of the restaurants around the port. A dish costs around 25€. A stroll around the charming port is welcome for digestion. The village and its Genoese tower seem as if frozen in time." french=". C'est donc l'endroit idéal pour dégouster de la langouste ou la pêche fraîche du jour dans l'un des restaurants autour du port. Un plat coûte environ 25€. Une balade autour du port plein de charme est la bienvenue pour la digestion. Le village et sa tour génoise semble comme figé dans le temps." />
        <br></br>
        <br></br>
        <Text english="Optional stops : Pino and Canari." french="Arrêts bonus : Pino and Canari." />
        <br></br>
        <br></br>
        <br></br>
        <h2><Text english="Nonza" french="Nonza" /></h2>
        <br></br>
        <Text english="The best for the end ! The village of Nonza is perched on a rocky peak and overlooks an immense and perfectly straight beach of black pebbles, all of course accompanied by a " french="Le meilleur pour la fin ! Le village de Nonza est perché sur un piton rocher et surplombe une immense plage de galets noirs parfaitement rectiligne, le tout évidemment accompagné d'une " />
        <a href="https://goo.gl/maps/BUa85j7YSR8ky2Mu8" target='_blank'><Text english="Genoese tower" french="tour génoise" /></a>
        <Text english=". Also called the paoline tower, it offers a " french=". Appelée la tour paoline, elle offre un " />
        <b><Text english="breathtaking panorama both of the village and the beach" french="panorama imprenable à la fois sur le village et sur la plage" /></b>
        <Text english="." french="." />
        <br></br>
        <br></br>
        <br></br>
    </p>
    const detailsAfternoon = <div>
        <p>
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
            <b><Text english="" french="" /></b>
            <Text english="" french="" />
        </p>
    </div>
    const detailsUseful = <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/4CpBvd4TcaH2zq5N6" target='_blank'><Text english="20 min drive from Bastia to Erbalunga" french="20 min de route de Bastia à Erbalunga" /></a>
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/Cj3vBsnmjbpMAFdY8" target='_blank'><Text english="35 min drive from Erbalunga to Macinaggio Port" french="36 min de route d'Erbalunga au Port de Macinaggio" /></a>
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/YGSVs9p4XN62Ty936" target='_blank'><Text english="20 min drive from Macinaggio Port to Mattei Mill" french="20 min de route de Port de Macinaggio au Moulin Mattei" /></a>
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/MPZKoJfhayXxQyh47" target='_blank'><Text english="17 min drive from Mattei Mill to Centuri" french="17 min de route du Moulin Mattei à Centuri" /></a>
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/pnjNdP8Trk4A3YkZ8" target='_blank'><Text english="1h15 drive from Centuri to Nonza" french="1h15 de route de Centuri à Nonza" /></a>
        </p>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/FEVnjqf3oK2h2ufy9" target='_blank'><Text english="55 min drive from Nonza to Bastia" french="55 min de route de Nonza à Bastia" /></a>
        </p>
        <br></br>
        <br></br>
        <img src="./icons/parking.png"></img>
        <p>
            <a href="https://goo.gl/maps/VJa9mr9RFqhPu5ZA9" target='_blank'><b><Text english="Erbalunga : Free parking" french="Erbalunga : Parking gratuit" /></b></a>
            <Text english=" at the end of the village" french=" à la sortie du village" />
        </p>
        <a href="https://goo.gl/maps/urfjjgy5Hi89jvnK6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/HPka2DTpX2RtiZyy8" target='_blank'><b><Text english="Macinaggio Port : Free parking" french="Port de Macinaggio : Parking gratuit" /></b></a>
            <Text english=" at the entrance of the village" french=" à l'entrée du village" />
        </p>
        <a href="https://goo.gl/maps/HPka2DTpX2RtiZyy8" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/XorMFhtHjTAYdGwB6" target='_blank'><b><Text english="Mattei Mill : Free parking" french="Moulin Mattei : Parking gratuit" /></b></a>
            <Text english=" in the bend down the mill, then you have to climb on foot (about 15 min walk)" french=" dans le virage en bas du moulin, ensuite il faut monter à pied (environ 15 min)." />
        </p>
        <a href="https://goo.gl/maps/XorMFhtHjTAYdGwB6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/FHSqYXExaHXEBcz36" target='_blank'><b><Text english="Centuri : Free parking" french="Centuri : Parking gratuit" /></b></a>
            <Text english=" at the entrance of the village. Several small car parks along the road. The more you go down toward the port, the more you will have to climb back up. However if you're unlucky, the U-turn at the bottom can be tricky." french=" à l'entrée du village. Plusieurs petits parkings le long de la route. Plus vous descendez, moins vous aurez à remonter ensuite mais en cas de malchance, le demi-tour en bas est compliqué." />
        </p>
        <a href="https://goo.gl/maps/FHSqYXExaHXEBcz36" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/23weqzRxjjKxgHcf7" target='_blank'><b><Text english="Nonza : Free parking" french="Nonza : Parking gratuit" /></b></a>
            <Text english=" on the side of the road at the entrance of the village. A few parking spots " french=" sur le bord de la route à l'entrée du village. Quelques places " />
            <a href="https://goo.gl/maps/6Sq5w2DVhxKv6vBr6" target='_blank'><Text english="in front of the church" french="devant l'église" /></a>
            <Text english=", but it's sadly not enough to face the crowd of tourists." french=" mais c'est malheureusement bien insuffisant pour faire face aux nombre de touristes." />
        </p>
        <a href="https://goo.gl/maps/23weqzRxjjKxgHcf7" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <a href="http://destination-cap-corse.corsica/les-18-chemins-a-theme/" target='_blank'><img src="./icons/hike.png"></img></a>
        <p>
            <a href="http://destination-cap-corse.corsica/les-18-chemins-a-theme/" target='_blank'><b><Text english="18 theme hikes" french="18 chemins à thème" /></b>
            <Text english=" allow you to discover Cap Corse, town by town. All quite short, they each last between 30 minutes and 2 hours." french=" permettent de découvrir le Cap Corse, commune par commune. De courte durée, ils durent chacun entre 30 min et 2 heures." /></a>
        </p>
        <br></br>
        <p>
            <Text english="A " french="Un " />
            <a href="http://destination-cap-corse.corsica/wp-content/uploads/2020/06/cc-depliant-2018.pdf" target='_blank'><b><Text english="leaflet" french="dépliant" /></b>
            <Text english=" gathering the main hikes (longer than previously) is available online on Destination Cap Corse website." french=" rassemblant les randonnées à faire (cette fois plus longues) est disponible sur le site Destination Cap Corse." /></a>
        </p>
    </div>

    const photos : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'portrait'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'}, 
        {photoName : '7.jpg', gridItemType : 'half'},
        {photoName : '8.jpg', gridItemType : 'half'}, 
        {photoName : '9.jpg', gridItemType : 'landscape'}, 
        {photoName : '10.jpg', gridItemType : 'portrait'}, 
        {photoName : '11.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '12.jpg', gridItemType : 'landscape'}, 
        {photoName : '13.jpg', gridItemType : 'panorama'}, 
        {photoName : '14.jpg', gridItemType : 'half'}, 
        {photoName : '15.mp4', gridItemType : 'half', isVideo: true},
        {photoName : '16.jpg', gridItemType : 'half'},
        {photoName : '17.jpg', gridItemType : 'half'},
        {photoName : '18.jpg', gridItemType : 'panorama'},
    ]

    return(
        <div className={`day-ten`}>
            <Day dayNumber={10}
                 introEnglishTitle="Cap Corse" introFrenchTitle="Cap Corse"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={true}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"to go around Cap Corse. Lots of mountain road ahead!"} programFrenchMorning={"de faire le tour du Cap Corse. Beaucoup de routes de montagne en perspective !"} 
                 programEnglishAfternoon={""} programFrenchAfternoon={""}
                 photos={photos}
            />
        </div>
    );
}

export default DayTen;