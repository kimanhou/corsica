import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayFourteen.scss';
import Map from './Map';

interface IDayFourteenProps {
}

const DayFourteen : React.FC<IDayFourteenProps> = props => {
    const introText = 
    <p>
        <Text english="" french="Calanche ou calanques ?"/>
        <i><Text english="Calanche" french=""/></i>
        <Text english=" or " french=""/>
        <i><Text english="calanques" french=""/></i>
        <Text english=" ?" french=""/>
        <br></br>
        <i><Text english="Calanche" french=""/></i>
        <Text english=" (which is prounounced " french="Calanche (qui se prononce " />
        <i><Text english="calanque" french="calanque" /></i>
        <Text english=") is the plural of the Corsican word " french=") est le pluriel du mot corse " />
        <i><Text english="calanca" french="calanca" /></i>
        <Text english=" which means " french=" qui signifie calanque. Donc &ldquo;calanche&rdquo; ou &ldquo;calanques&rdquo; mais pas &ldquo;calanches&rdquo;… Et dans tous les cas, ça se prononce calanque !" />
        <i><Text english="calanque" french=""/></i>
        <Text english=". So " french=""/>
        <i><Text english="&ldquo;calanche&rdquo;" french=""/></i>
        <Text english=" or " french=""/>
        <i><Text english="&ldquo;calanques&rdquo;" french=""/></i>
        <Text english=" but not " french=""/>
        <i><Text english="&ldquo;calanches&rdquo;" french=""/></i>
        <Text english=" … And in any case, it is pronounced " french=""/>
        <i><Text english="calanque" french=""/></i>
        <Text english=" 1" french=""/>
        <br></br>
        <Text english="The site of " french="Le site des " />
        <b><Text english="Piana's Calanques" french="calanques de Piana" /></b>
        <Text english=", a UNESCO World Heritage Site, is incredibly beautiful. To get there, you have to take the only road connecting Porto to Piana: the D81, a narrow and winding road, and above all very busy. The sight from the road is breathtaking, however to fully enjoy it, it is more pleasant to visit the site on foot." 
              french=", classé au patrimoine mondial de l'Unesco, est d'une beauté incroyable. Pour y accéder, il faut emprunter la seule route reliant Porto à Piana : la D81, route étroite et sinueuse, et surtout très fréquentée. Le spectacle depuis la route est époustouflant, cependant pour en profiter pleinement, il est plus agréable de visiter le site à pied." />
    </p>;

    const detailsMorning = 
    <p>
        <Text english="To start the day quietly, we suggest a short hike that starts at the " 
              french="Pour commencer la journée tranquillement, nous vous proposons une courte randonnée qui débute au " />
        <a href="https://goo.gl/maps/ErGKMx4goKVhesDp6" target='_blank'><b><Text english="Dog's Head car park" french="parking de la Tête de Chien"/></b></a>
        <Text english=" and will lead you to the belvedere overlooking " french=" et qui vous conduira au belvédère donnant sur le "/>
        <a href="https://goo.gl/maps/tpGL1AW62U7k4Kz78" target='_blank'><Text english="the castle" french="château fort" /></a>
        <Text english=". It only takes " 
              french=". Il ne suffit que de " />
        <b><Text english="30 minutes" french="30 minutes"/></b>
        <Text english=" to reach it. The trail is of " 
              french=" pour l'atteindre. Le sentier est de "/>
        <b><Text english="low difficulty" french="faible difficulté"/></b>
        <Text english=", with however some passages where you will have to help yourself with your hands. Nothing insurmountable and the view is magnificent!" french=", avec cependant quelques passages où il faudra s'aider de ses mains. Rien d'insurmontable et la vue est magnifique !"/>
        <br></br>
        <br></br>
        <Text english="If you still have energy, the unmissable " 
              french="Si vous avez encore de l'énergie, l'incontournable " />
        <b><Text english="old mule track" french="ancien chemin des muletiers"/></b>
        <Text english=" is open to you. We suggest that you follow a " french=" vous tend les bras. Nous vous suggérons de suivre ici un "/>
        <b><Text english="custom circuit" french="circuit custom"/></b>
        <Text english=" here that we have improvised on site. We left our car at the Dog's Head parking lot and walked down the road to " french=" que nous avons improvisé sur place. Nous avons laissé notre voiture au parking de la Tête de Chien et sommes descendus à pied le long de la route jusqu'aux "/>
        <a href="https://goo.gl/maps/qjm95XM33gpFYMiT6" target='_blank'><b><Text english="Roches Bleues" french="Roches Bleues"/></b></a>
        <Text english=", a chic restaurant with a panoramic view. " french=", un restaurant chic avec une vue panoramique. " />
        <a href="https://goo.gl/maps/ckzt6nirALxa4N1J9" target='_blank'><Text english="On the other side of the road and a little further down" french="De l'autre côté de la route et un petit peu en contrebas" /></a>
        <Text english=" is the starting point of the " 
              french=" se trouve le point de départ du " />
        <b><Text english="Capu d'Ortu trail" french="sentier du Capu d'Ortu"/></b>
        <Text english=". It starts strong with a very steep climb for 30 minutes. Then, the ground softens and the path is relatively flat. We followed the Capu d'Ortu trail until the " french=". Cela débute fort avec une montée bien raide pendant 30 min. Puis, le terrain s'adoucit et le chemin est relativement plat. Nous avons suivi le sentier du Capu d'Ortu jusqu'au "/>
        <b><Text english="junction with the Capu di i Vitullu trail and the Palani trail" french="croisement avec le sentier de Capu di i Vitullu et le sentier de Palani"/></b>
        <Text english=" which we reached after 40 minutes of walking. There, we branched off towards Piana to arrive at the end of the " 
              french=" que nous avons atteint au bout 40 minutes de marche. Là, nous avons bifurqué vers Piana pour arriver au bout de "/>
        <b><Text english="old mule track" french="l'ancier sentier du muletier"/></b>
        <Text english=" 30 minutes after the fork. This last section is the most beautiful part of the journey. It is a path paved with large stones offering a breathtaking panorama of the creeks of Piana and which takes a good half hour. Finally, all you have to do is go down the stairs to " french=" 30 minutes après la bifurcation. Cette dernière section est la plus belle portion du trajet. Il s'agit d'un chemin pavé de larges pierres offrant un panorama époustouflant sur les calanques de Piana et qui se parcourt en une bonne demie heure. Enfin, il suffit ensuite de descendre les escaliers vers "/>
        <a href="https://goo.gl/maps/fBtbrVCbsKxzgj8Z9" target='_blank'><Text english="the road" french="la route" /></a>
        <Text english=" and finish by following it to the Roches Bleues, then to the car park. This loop took us a total of " french=" et de finir en longeant celle-ci jusqu'aux Roches Bleues, puis jusqu'au parking. Cette boucle nous a pris au total " />
        <b><Text english="2h15" french="2h15"/></b>
        <Text english="." french="."/>
    </p>
    
    const detailsAfternoon = <div>
        <p>
            <Text english="After a good morning hiking, head to the " french="Après une bonne matinée de randonnée, rendez-vous au " />
            <b><Text english="charming village of Piana" french="charmant village de Piana" /></b>
            <Text english=", which overlooks the Gulf of Porto and faces the Scandola peninsula. It is classified among the “most beautiful villages in France”. The heart of the village is organized around the " french=", qui surplombe le golfe de Porto et fait face à la presqu'île de Scandola. Il est classé parmi les &ldquo;plus beaux villages de France&rdquo;. Le cœur du village est organisé autour de " />
            <a href="https://goo.gl/maps/3RPRkvw7Krz9wheq9" target='_blank'><Text english="Church of the Assumption" french="l'église de l'Assomption" /></a>
            <Text english=" and is made up of steep alleys lined with pretty flowered houses. A few restaurants, caterers and bakeries welcome you for lunch." french=" et est constitué de ruelles escarpées bordées de jolies maisons fleuries. Quelques restaurants, traiteur et boulangeries vous accueillent pour le déjeuner." />
            <br></br>
            <br></br>
            <Text english="It's now time to hit the road again and to " french="Il est maintenant temps de reprendre la route pour le dernier segment du voyage et de " />
            <b><Text english="go back to Ajaccio" french="retourner à Ajaccio"/></b>
            <Text english=". The trip takes about " french=". Le trajet dure environ "/>
            <b><Text english="1h30" french="1h30"/></b>
            <Text english=", the first half is quite winding. You will be able to make the most of the last moments on the island by shopping or going to the beach. If you have a rental car, this is the time for a car wash." french=", la première moitié étant un peu sinueuse. Vous pourrez profiter de ces derniers instants sur l'île pour faire des achats et aller à la plage. Si vous avez une voiture de location, un nettoyage s'impose."/>
        </p>
    </div>
    const detailsUseful = 
    <div>
        <img src="./icons/car.png"></img>
        <p>
            <a href="https://goo.gl/maps/sL1h6S7rzhGRUAUXA" target='_blank'><Text english="20 min drive from the city center of Porto to Dog's Head car park, the road is narrow and winding" french="20 min de route du centre ville de Porto au parking de la Tête du Chien, la route est étroite et sinueuse" /></a>
            <br></br>
            <a href="https://goo.gl/maps/7DPqD3x7Qa8rjY996" target='_blank'><Text english="10 min drive from Dog's Head car park to the city center of Piana, often more when it's crowded" french="10 min de route du parking de la Tête du Chien au centre ville de Piana, souvent plus lorsqu'il y a du monde" /></a>
            <br></br>
            <a href="https://goo.gl/maps/9BpQbJ6UcDNgPboj8" target='_blank'><Text english="1h30 drive from the city center of Piana to Ajaccio" french="1h30 de route du centre ville de Piana à Ajaccio" /></a>
        </p>
        <br></br>
        <br></br>
        <img src="./icons/parking.png"></img>
        <p>
            <a href="https://goo.gl/maps/ErGKMx4goKVhesDp6" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" at Dog's Head car park, starting point of the hike to the belvedere. Only 15 spots." french=" au parking de la Tête de Chien, point de départ du sentier vers le belvédère donnant sur le château fort. Seulement une quinzaine de places." />
        </p>
        <a href="https://goo.gl/maps/ErGKMx4goKVhesDp6" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <a href="https://www.visorando.com/randonnee-de-la-tete-de-chien-au-chateau-fort-a-pi/" target='_blank'><img src="./icons/hike.png"></img></a>
        <p>
            <a href="https://www.visorando.com/randonnee-de-la-tete-de-chien-au-chateau-fort-a-pi/" target='_blank'><b><Text english="Visorando link" french="Lien Visorando" /></b></a>
            <Text english=" of the hike from Dog's Head car park to the belvedere" french=" de la randonnée du parking de la Tête de Chien au belvédère donnant sur le château fort" />
            <br></br>
            <a href="https://www.visorando.com/randonnee-l-ancien-sentier-muletier-de-piana-ota/" target='_blank'><b><Text english="Visorando link" french="Lien Visorando" /></b></a>
            <Text english=" of the old mule track" french=" de l'ancien chemin des muletiers'" />
        </p>
        <br></br>
        <br></br>
        <img src="./icons/info.png"></img>
        <p>
            <a href="http://www.ouestcorsica.com/" target='_blank'>
                <b><Text english="Tourist office " french="L’office de tourisme " /></b>
                <Text english="of Piana" french=" de Piana" />
            </a>
        </p>
        <a href="https://goo.gl/maps/tcLJm66xjBYsEC766" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="http://www.ouestcorsica.com/" target='_blank'><img src="./icons/website.png"></img></a>
    </div>

    return(
        <div className={`day-fourteen`}>
            <Day dayNumber={14}
                 introEnglishTitle="Calanques of Piana and drive back to Ajaccio" introFrenchTitle="Calanques de Piana et retour a Ajaccio"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"hiking in Piana's Calanques"} programFrenchMorning={"randonnée dans les calanques de Piana"} 
                 programEnglishAfternoon={"drive to Ajaccio"} programFrenchAfternoon={"route vers Ajaccio"}
            />
        </div>
    );
}

export default DayFourteen;