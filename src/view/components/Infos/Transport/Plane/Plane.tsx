import React from 'react';
import Text from '../../../LocalisationContext/Text';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import Link from '../Link';
import AjaccioAirportTransport from './AjaccioAirportTransport';
import './Plane.scss';

interface IPlaneProps {
}

const Plane : React.FC<IPlaneProps> = props => {
    return(
        <div className={`plane`} id={`plane`}>
            <SectionHeader englishTitle="The plane" englishSubtitle="fast and comfortable" frenchTitle="L'avion" frenchSubtitle="le plus rapide et confortable" />
            <div className={`column left`}>
                <p><b><Text english="Our key figures" french="Nos chiffres" /></b></p>
                <p><Text english="220€ for a return ticket from Paris to Ajaccio, Tuesday to Tuesday with Corsica Airlines (in partnership with Air France) in september 2020. For a departure and a return on Saturday for the same period of the year or travelling dates in August, count double." french="220€ pour un aller-retour Paris Ajaccio de mardi à mardi avec Corsica Airlines (en partenariat avec Air France) en septembre 2020. Pour un départ et un retour le samedi pour la même période ou des dates au mois d’août, il faut compter le double." /></p>
                <br></br>
                <br></br>
                <p><b><Text english="Useful link" french="Lien utile" /></b></p>
                <p><Link textEnglish="Muvitarra" textFrench="Muvitarra" link="https://mobilite.muvitarra.fr/" /></p>
                <p><Text english="As an up-to-date map of Muvistrada's network can't be found on Internet, here is a photo taken at a bus stop." french="Comme un plan à jour du réseau urbain de la Muvistrada est introuvable sur Internet, voici une photo prise à un l’arrêt de bus."/></p>
                <a href="./photos/infos/transport/bus-lines.jpg" target="_blank" ><img src="./photos/infos/transport/bus-lines.jpg" /></a>
            </div>
            <div className={`column middle`}></div>
            <div className={`column right`}>
                <p>
                    <Text english="Flying to Corsica is " french="Se rendre en avion en Corse est le moyen " />
                    <b><Text english="the fastest and most comfortable way, but it's also the most expensive" french="le plus rapide et confortable, mais c’est également souvent le plus coûteux" /></b>
                    <Text english=". A few airlines like Corsica Airlines, Air France and Easyjet connect the four airports of the island with the continent (mainly France and Italy). Those airports are : Ajaccio et Bastia, Calvi and Figari (near Bonifacio)." french=". Quelques compagnies dont Corsica Airlines, Air France et EasyJet desservent les 4 aéroports de l’île : Ajaccio et Bastia, Calvi et Figari (près de Bonifacio)." />
                    <br></br>
                    <br></br>
                    <b><Text english="Ajaccio airport : " french="L’aéroport d’Ajaccio : " /></b>
                    <Text english="Obviously, its name is Napoleon Bonaparte. It's located 6km East of the city center." french="il s’appelle évidemment Napoléon Bonaparte et se situe à 6km à l’est du centre ville. " />
                    <br></br>
                    <Text english="To get there :" french="Pour s’y rendre :" />
                    <ul>
                        <li><Text english="- there is an overpriced shuttle bus from the train station. The cost is 10€ for a one way ticket, unless you buy it via Muvistrada (or Muvitarra, I'm not sure why there are two names for Ajaccio's public transport service) app, which would then only cost 8€. The app is faily well designed, so we advise you to download it. It's also possible to buy your ticket by sending an SMS but we did not try that shady method." french="- il existe une navette à partir de la gare CFC au prix exorbitant de 10€, à moins de télécharger l’application Muvistrada (le service public de transports en commun d’Ajaccio, un autre nom est Muvitarra), qui permet d’acheter ce ticket pour la modique somme de 8€. Néanmoins, l’application est plutôt bien faite. Il est également possible d’acheter son ticket par SMS mais nous n’avons pas tenté cette méthode obscure." /></li>
                        <AjaccioAirportTransport line="Direction Aéroport" lineImageSrc="./photos/infos/transport/8.png" departure="Gare CFC" departureLink="https://goo.gl/maps/wStVV2HihW3Stm2k9" arrival="Aéroport" arrivalLink="https://goo.gl/maps/AUVFsEXiei2SvGMm9" price={<Text english="10€ onboard, 8€ via the app" french="10€ dans le bus, 8€ via l'application"/>} walk="0 min" walkLink={""}/>
                        <li><Text english="- bus nº 1 takes you to Aspretto roundabout in less than 15 min, then it's a 40 min walk along the beach. A bit slow and tiring but this bus only costs 1€ (again through the app)." french="- le bus numéro 1 vous dépose au rond-point d’Aspretto en moins de 15 min, puis c’est 40 min de marche le long de la plage. Un peu lent et fatigant mais ce bus ne coûte qu’1€ (encore une fois à travers l’application)." /></li>
                        <AjaccioAirportTransport line="Direction Hauts du Vazzio" lineImageSrc="./photos/infos/transport/1.png" departure="Sainte Lucie" departureLink="https://goo.gl/maps/NJ4t2XrcRRHFmwrR7" arrival="Aspretto" arrivalLink="https://goo.gl/maps/JcbraxDSVFMT3dGB7" price={<Text english="1€" french="1€"/>} walk="40 min" walkLink={"https://goo.gl/maps/2XBG4Sh3mAy6Mzdn6"}/>
                        <li><Text english="- lastly another solution is to take the train to Ricanto station (" french="- une autre solution consiste à prendre le train jusqu’à la gare de Ricanto (" />
                        <i><Text english="U Ricantu" french="U Ricantu" /></i>
                        <Text english="). The trip from the main train station lasts 8 min, then it's “only“ 25 min walk." french="). Le trajet dure 8 min, puis il ne reste “que” 25 min de marche." /></li>
                        <AjaccioAirportTransport line="Direction Bastia / Calvi" lineImageSrc="./icons/train.png" departure="Gare d'Ajaccio" departureLink="https://goo.gl/maps/9WoUDovQeajozrVK7" arrival="Gare de Ricanto" arrivalLink="https://goo.gl/maps/U2hXKkWr8Et9xdKKA" price={<Text english="10€ onboard, 8€ via Muvistrada app" french="2€"/>} walk="25 min" walkLink={"https://goo.gl/maps/W8LpenyoKsktLcVe6"}/>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Plane;