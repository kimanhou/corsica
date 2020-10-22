import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day from '../Day';
import IconAndText from '../IconAndText';
import './DayFive.scss';
import Map from './Map';

interface IDayFiveProps {
}

const DayFive : React.FC<IDayFiveProps> = props => {
    const introText = 
    <p>
        <Text english="Porto-Vecchio, or " french="Porto-Vecchio, ou " />
        <i><Text english="Portivechju" french="Portivechju" /></i>
        <Text english=" in Corsican, is the 3rd most populous city in Corsica, after Ajaccio and Bastia. Highly famous for the beaches that surround it, the city used to have salt marshes, today abandoned. People go there for its historic center, for shopping, for its restaurants, bars and nightclubs and for its beaches." 
              french=" en Corse, est la 3e ville la plus peuplée de Corse, derrière Ajaccio et Bastia. Mondialement réputée pour ses plages qui l'environnent, la ville produisait autrefois du sel comme l'en témoignent les marais salants aujourd'hui abandonnés. On y va pour son centre historique, pour faire du shopping, pour bien manger, pour faire la fête et pour ses plages." />
        <Text english="" french="" />
    </p>;

    const detailsMorning = <p>
        <Text english="The historic center of Porto-Vecchio is small, the visit takes only a few hours, time to explore the " french="Le centre historique de Porto-Vecchio est petit, la visite ne prend que quelques heures, le temps d'explorer les " />
        <b><Text english="charming little alleys" french="petites ruelles pleines de charme" /></b>
        <Text english=" and admire the many carved gates. he center of the old town is the Place de la République in front of Saint-Jean-Baptiste church, a very lively place of life with its bars and ice cream parlors. The remains of the citadel reminds the visitor that the city was once a stronghold. Also not to be missed is the Genoese gate and its belvedere offering a lovely view of the surroundings. Finally, the Bastion de France and its panoramic terrace offers a 360 ° panorama with a breathtaking view of the Gulf of Porto-Vecchio and the mountain (admission 2€)." 
              french=" et admirer les nombreuses portes sculptées. Le centre de la vieille ville est la Place de la République devant l´église Saint-Jean-Baptiste, lieu de vie très animé avec ses bars et ses glaciers. Les vestiges de la citadelle rappellent que la cité était jadis une place forte. À ne pas manquer également la porte génoise et son belvédère offrant une jolie vue sur les alentours. Enfin, le bastion de France et sa terrasse panoramique offre un panorama à 360° avec une vue imprenable sur le golfe de Porto-Vecchio et la montagne (entrée 2€)." />
        <br></br>
        <Text english="The city is also a landmark for fashionistas thanks to the many trendy clothing stores and more generally a shopping mecca. The nightlife is very lively as trendy bars and nightclubs abound. In addition to the many restaurants and bars in the old town, Porto-Vecchio has the largest selection of supermarkets in the region." 
              french="La ville est également un repère de fashionistas grâce aux nombreuses boutiques de vêtements tendances et plus généralement un haut lieu du shopping. La vie nocture est très animée car bars branchés et discothèques fourmillent. En outre les multiples restaurants et bars de la vieille ville, Porto-Vecchio rassemble le plus grand choix en supermarchés de la région." />
    </p>

    const detailsAfternoon = <div>
        <p>
            <Text english="The region is full of beaches, each more magnificent than the last, however the two most famous are undoubtedly " french="La région regorge de plages toutes plus magnifiques les unes que les autres, cependant les deux plus connues sont inconstestablement " />
            <a href="https://goo.gl/maps/57gdDpFWSAyLuGhh6" target='_blank'><b><Text english="Santa Giulia" french="Santa Giulia" /></b></a>
            <Text english=" and " french=" et " />
            <a href="https://goo.gl/maps/pXJdHJUguBx7zx2b7" target='_blank'><b><Text english="Palombaggia" french="Palombaggia" /></b></a>
            <Text english=". They are both characterized by a large expanse of fine sand, turquoise water, calm and shallow. As a bonus, some fish come to tickle the toes of the swimmers. They are obviously very busy, especially in summer." french=". Elles se caractérisent toutes les deux par une grand étendue de sable fin, une eau turquoise, calme et peu profonde. En prime, quelques poissons viennent chatouiller les orteils des baigneurs. Elles sont évidemment très fréquentées, surtout en été." />
            <br></br>
            <Text english="If you are looking for a quieter place, you will be spoiled for choice in the area. Among the many beaches that are worth the detour, we can mention the bay of Rondinara or Cala Rossa. Locals always have great advice, just ask them which their favorite beach is and they will happily point you to a hidden gem." french="Si vous cherchez un endroit plus calme, vous aurez l'embarras du choix dans la région. Parmi les multiples plages qui vaillent le détour, on peut citer la baie de Rondinara ou Cala Rossa. Les locaux ont toujours de bons conseils, il suffit de leur demander quelle est leur plage préférée." />
            <br></br>
            <Text english="Our accommodation was right next to " french="Notre logement se trouvait juste à côté de la " />
            <a href="https://goo.gl/maps/gxpse6JGxPNJxpmp9" target='_blank'><Text english="Canetu beach" french="plage de Canetu" /></a>
            <Text english=", which is accessible by a one kilometer track that is difficult to drive (we preferred to park the car and go down on foot). The beach is certainly less beautiful than the two previously mentioned, however it is almost deserted. Only a few locals were enjoying a peaceful late afternoon when we went." french=", qui est accessible par une piste d'un kilomètre difficilement carrossable (nous avons préféré garer la voiture et descendre à pied). Certes la plage est moins belle que les deux précédemment citées, cependant elle est presque déserte. Seuls quelques locaux y profitaient d'une fin d'après-midi au calme lors de notre passage." />
        </p>
    </div>
    const detailsUseful = <div>
        <img src="./icons/parking.png"></img>
        <p>
            <a href="https://goo.gl/maps/RXSCWgG2mXHL3fUF7" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" at Leclerc, outside the historic center of Porto-Vecchio. The entire shopping area offers free parking, the closest to the old town being Gifi. An " 
                  french=" au Leclerc, à l'extérieur du centre historique de Porto-Vecchio. Toute la zone commerciale offre un stationnement gratuit, le plus proche de la vieille ville étant Gifi. Une " />
            <a href="http://acitadina.porto-vecchio.corsica/" target='_blank'><Text english="electric free shuttle bus" french="navette électrique et gratuite" /></a>
            <Text english=" takes you to the city center. Otherwise, it's a 15 min walk." french=" vous permet de rejoindre le centre historique, sinon c'est 15 min de marche."/>
        </p>
        <a href="https://goo.gl/maps/vyhVMn3UcbXa4dWEA" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/vyhVMn3UcbXa4dWEA" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" North of Palombaggia beach" 
                  french=" au Nord de la plage de Palombaggia dans la pinède" />
        </p>
        <a href="https://goo.gl/maps/vyhVMn3UcbXa4dWEA" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <p>
            <a href="https://goo.gl/maps/vJaZaN1gQFr4DnmW8" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" North of Santa Giulia beach, despite a price of 5€ posted everywhere on the Internet. It may depend on the season." 
                  french=" au Nord de la plage de Santa Giulia, malgré un prix de 5€ affiché partout sur Internet. Cela dépend sûrement de la saison." />
        </p>
        <a href="https://goo.gl/maps/vJaZaN1gQFr4DnmW8" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <img src="./icons/info.png"></img>
        <p>
            <a href="http://www.ot-portovecchio.com/" target='_blank'><b><Text english="Tourist office" french="L’office de tourisme" /></b>
            <Text english="" 
                  french="  intercommunal de Porto Vecchio" /></a>
        </p>
        <a href="https://g.page/PortoVecchioTourisme?share" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <a href="http://www.ot-portovecchio.com/" target='_blank'><img src="./icons/website.png"></img></a>
        
    </div>

    return(
        <div className={`day-five`}>
            <Day dayNumber={5} 
                 introEnglishTitle="Porto Vecchio and its beaches" introFrenchTitle="Porto Vecchio et ses plages"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={false}
                 detailsMorning={detailsMorning} detailsAfternoon={detailsAfternoon} detailsUseful={detailsUseful}
                 programEnglishMorning={"visit of the historical center of Porto-Vecchio"} programFrenchMorning={"visite du centre historique de Port-Vecchio"} 
                 programEnglishAfternoon={"beaches"} programFrenchAfternoon={"les plages"}
            />
        </div>
    );
}

export default DayFive;