import React from 'react';
import Text from '../../LocalisationContext/Text';
import Day, { IPhotoData } from '../Day';
import IconAndText from '../IconAndText';
import './DayFour.scss';
import Map from './Map';

interface IDayFourProps {
}

const DayFour : React.FC<IDayFourProps> = props => {
    const introText = <p>
        <Text english="The archipelago of " french="L'archipel des " />
        <b><Text english="Lavezzi Islands" french="Îles Lavezzi" /></b>
        <Text english=" is famous for its landscapes of granite rock piles, its fauna and flora. Small coves and dreamy beaches dot the periphery of the main island, on which the main traces left by men are a sheepfold and a monument, in the shape of an arrow, commemorating the sinking of the " 
              french=" est célèbre pour ses paysages d'empilements de rochers granitiques, sa faune et sa flore. Petites criques et plages de rêves parsèment le pourtour de l'île principale, dont les principales traces laissées par l'Homme sont une bergerie et un monument, en forme de flèche, commémoratif du naufrage de la " />
        <i><Text english="Sémillante" french="Sémillante" /></i>
        <Text english=", a frigate of the French navy which ran aground in 1855." french=", une frégate de la marine française qui s'échoua en 1855." />
    </p>;
    const detailsMorning = <p>
        <h2><Text english="Before you go" french="Avant de partir" /></h2>
        <br></br>
        <Text english="Only one company has the monopoly on boat trips in Bonifacio: the " french="Une seule compagnie détient le monopole des excursions en bateau à Bonifacio : la Sociéte des Promenades en Mer de Bonifacio (SPMB). Elle propose deux circuits : le premier, intitulé Grottes falaises et calanques, est une découverte de la réserve naturelle des Bouches de Bonifacio et des grottes marines, le " />
        <i><Text english="Sociéte des Promenades en Mer de Bonifacio" french="" /></i>
        <Text english=" (SPMB). The company offers two circuits: the first, entitled Caves, cliffs and creeks, is a discovery of the " french="" />
        <i><Text english="Bouches de Bonifacio" french="" /></i>
        <Text english=" nature reserve and sea caves, the " french="" />
        <b><Text english="circuit nº 2" french="circuit nº 2" /></b>
        <Text english=" is the one we are interested in here. It allows visitors to go to Lavezzi Island, and on their return to enjoy a sea trip around Cavallo Island and have a good overview of the Bouches de Bonifacio nature reserve. "
              french=" est celui qui nous intéresse ici. Il permet aux visiteurs de se rendre sur l'île Lavezzi, et au retour de profiter d'une promenade en mer pour approcher l'île de Cavallo et avoir un bel aperçu de la réserve naturelle des Bouches de Bonifacio. " />
        <b><Text english="The outward journey takes 30 minutes and the return, with a visit to the Bouches de Bonifacio, lasts 1 hour." french="L'aller prend 30 min et le retour avec la visite des Bouches de Bonifacio dure 1h." /></b> 
        <br></br>
        <div className={`timetable`}>
            <div className={`timetable-title`}>
                <b><Text english="Timetable :" french="Les horaires :" /></b>
            </div>
            <div className={`timetable-data`}>
                <Text english="departure every hour from 9.30am (10.30am in winter) until 3.30pm" french=" départ toutes les heures de 9h30 (10h30 en hiver) à 15h30" />
                <br></br>
                <Text english="return every hour from 12.30pm until 6.30pm (5.30pm or even 4.30pm in winter)" french="retour toutes les heures de 12h30 à 18h30 (17h30 voire 16h30 en hiver)" />
            </div>
        </div>
        <div className={`prices`}>
            <div className={`prices-title`}>
                <b><Text english="Prices" french="Les prix :" /></b>
            </div>
            <div className={`prices-data`}>
                <div className={`prices-data- col-1`}>
                    <Text english="Adult : 37€" french="Tarif adulte : 37,00€" />
                    <br></br>
                    <Text english="Teenager age 13-17 : 28.50€" french="Tarif ados de 13 à 17 ans : 28,50€" />
                    <br></br>
                    <Text english="Free for children younger than 4 years old" french="Gratuit pour les moins de 4 ans" />
                </div>
                <div className={`prices-data-col-2`}>
                    <Text english="Student : 32.50€" french="Tarif étudiants : 32,50€" />
                    <br></br>
                    <Text english="Children age 4 to 12 : 18.50€" french="Tarif enfants de 4 à 12 ans : 18,50€" />
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h2><Text english="Once on the island" french="Une fois sur place" /></h2>
        <br></br>
        <Text english="The disembarkation point is " french="Le point de débarquement est " />
        <a href="https://goo.gl/maps/Ss1TKHuFo7Mfg5U37" target='_blank'><Text english="here" french="ici" /></a>
        <Text english=". Remember it well because the return boat will leave from the same place." french=". Bien le repérer car l'embarquement pour le bateau de retour se fera au même endroit." />
        <br></br>
        <Text english="On Lavezzi Island, there is " french="Sur l'île Lavezzi, il n'y a " />
        <b><Text english="no toilets, ni drinkable water, no shop, no trash bins" french="ni toilette, ni eau potable, ni magasin, ni poubelle" /></b>
        <Text english=". You absolutely need to take with you water and food and leave no garbage behind." french=". Il faut impérativement apporter de l'eau et un pique nique et repartir avec ses déchets." />
        <br></br>
        <Text english="It is strictly forbidden to leave the trails, in order to protect the flora and fauna. This does not prevent exploring the whole island in all its corners, even the most remote. The site is small enough that there is no need for a map to find your way around."
              french="Il est strictement interdit de sortir des sentiers, afin de protéger la faune et la flore. Cela n'empêche pas d'explorer toute l'île dans tous ses recoins, même les plus reculés. Le site est assez petit pour qu'il n'y ait pas besoin de carte pour se repérer." />
        <br></br>
        <Text english="We started with a tour of the island to admire the granite formations and the different beaches. Then we found a " french="Nous avons commencé par un tour de l'île pour admirer les formations de granite et les différentes plages. Puis nous avons trouvé un " />
        <a href="https://goo.gl/maps/SacTguJ6uFAAceV6A" target='_blank'><Text english="secluded spot" french="endroit isolé" /></a>
        <Text english=" to have a picnic and spend the rest of the day " french=" pour y pique niquer et passer le reste de la journée à " />
        <b><Text english="swimming among fish in a crystal clear water" french="nager au milieu des poissons dans une eau limpide" /></b>
        <Text english="." french="." />
        <br></br>
        <br></br>
        <br></br>
        <h2><Text english="After you go" french="Apres la visite" /></h2>
        <br></br>
        <Text english="The return to Bonifacio lasts an hour, they take you on a commented cruise around " french="Le retour vers Bonifacio dure une heure, on vous emmène en croisière commentée autour de l'" />
        <b><Text english="Cavello Island" french="île de Cavello" /></b>
        <Text english=", a billionaire nest. The staff happily details all the luxurious villas and their owners. Then they show you a " french=", véritable nid à milliardaires. Le staff détaille joyeusement les luxueuses villas et leurs propriétaires. Ensuite, on vous montre une "/>
        <b><Text english="grotto" french="grotte marine" /></b>
        <Text english=" which the boat accesses through a hole in the cliff. Unfortunately, for safety reasons, we cannot go very far, rock falls having weakened the structure. The route then continues at the foot of the cliffs offering " french=" à laquelle le bateau accède par un trou dans la falaise. Malheureusement, pour des raisons de sécurité, on ne peut pas s'enfoncer très loin, des chutes de pierre ayant fragilisé la structure. Le parcours se poursuit ensuite au pied des falaises offrant ainsi "/>
        <b><Text english="breathtaking views" french="une vue imprenable" /></b>
        <Text english=" on Bonifacio's upper town, especially on King of Aragon's staricase." french=" sur la ville haute de Bonifacio, notamment sur les Escaliers du Roy d'Aragon."/>
    </p>
    
    const detailsUseful = <div>
        <a href="https://goo.gl/maps/6KX9LWDN4RJiAC528" target='_blank'><img src="./icons/parking.png"></img></a>
        <p>
            <a href="https://goo.gl/maps/6KX9LWDN4RJiAC528" target='_blank'><b><Text english="Free parking" french="Parking gratuit" /></b></a>
            <Text english=" included in your boat tickets, just follow the signs “SPMB Promenades en mer“ to car parks provided by SPMB. The one we parked in is here :" 
                  french=" inclus dans le prix du billet de toute excursion en bateau organisée par la SPMB. Il suffit de suivre les panneaux “SPMB Promenades en mer“ pour trouver les parkings mis à disposition par la SPMB. Celui où nous nous sommes garés est là :" />
        </p>
        <a href="https://goo.gl/maps/6KX9LWDN4RJiAC528" target='_blank'><img src="./icons/map-marker-no-border.png"></img></a>
        <br></br>
        <br></br>
        <a href="https://www.spmbonifacio.com/" target='_blank'><Text english="SPMB's website" french="Site de la SPMB"/></a>
    </div>

    const photos : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'portrait'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'},
        {photoName : '7.jpg', gridItemType : 'landscape'},
        {photoName : '8.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '9.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'landscape'},
        {photoName : '11.jpg', gridItemType : 'half'},
        {photoName : '12.jpg', gridItemType : 'half'},
        {photoName : '13.jpg', gridItemType : 'half'},
        {photoName : '14.jpg', gridItemType : 'half'},
    ]

    return(
        <div className={`day-four`}>
            <Day dayNumber={4} 
                 introEnglishTitle="Lavezzi Islands" introFrenchTitle="Iles Lavezzi"
                 introText={introText}
                 introMap={<Map/>}
                 isFullDay={true}
                 detailsMorning={detailsMorning} detailsAfternoon={<div></div>} detailsUseful={detailsUseful}
                 programEnglishMorning={"to find a secluded beach and to swim among the fish. Don't forget your snorkeling gear !"} programFrenchMorning={"de trouver un plage isolée pour nager au milieu des poissons. Ne pas oublier masques et tubas !"} 
                 programEnglishAfternoon={""} programFrenchAfternoon={""}
                 photos={photos}
            />
        </div>
    );
}

export default DayFour;