import React from 'react';
import Text from '../../../LocalisationContext/Text';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import Link from '../Link';
import './Train.scss'

interface ITrainProps {
}

const Train : React.FC<ITrainProps> = props => {
    return(
        <div className={`train`} id={`train`}>
            <SectionHeader englishTitle="The train" englishSubtitle="" frenchTitle="Le train" frenchSubtitle="l insolite" />
            <div className={`column left`}>
                <p>
                    <Text english="To be honest, I don't really know how we ended up taking the train. In Europe, train is likely to be the fastest and easiest way to commute from a major city to another. But not in Corsica ... It's quite slow (compared to driving), uncomfortable, not exactly clean and not that cheap. The train usually follows the main roads. Between Corte and Bastia, there are beautiful landscapes. There is only one company running the whole network : Chemins de Fer Corse (CFC). Around the main cities (Ajaccio and Bastia), the train runs like a metro or a tram, meaning locals commute to work or school with it. Outside those areas, it's more a regular train connecting countryside villages. All announcement is in Corsican. " french="Pour être tout à fait honnête, je ne sais pas pourquoi on a pris le train en Corse. Sûrement par habitude que ce moyen de transport soit sur le continent le plus pratique et rapide pour relier deux grandes villes. Mais en fait non.... C'est lent, inconfortable, pas excessivement propre et pas si peu cher que ca. La ligne de chemin de fer suit la route. Entre Corte et Bastia, on peut apprécier de beaux paysages. Une seule compagnie règne sur toute l'île : Chemins de Fer Corse (CFC). Aux alentours d'Ajaccio et de Bastia, le train fait office de métro/tram. Les locaux le prennent pour se rendre à l'école ou au travail. Ensuite, il s'apparente plus à un TER qui dessert les villages en campagne. Les annonces sont exclusivement en Corse." />
                    <b><Text english="Tickets have to be bought on the day of travel from the station of departure or onboard the train via a member of staff," french="Les billets sont à acheter le jour même à la gare de départ ou dans le train auprès du contrôleur"/></b>
                    <Text english=", you cannot buy a ticket in advance. Seats are not assigned." french=", il n'est pas possible d'acheter un billet à l'avance. Les places ne sont pas attribuées." /> 
                </p>
                <p><Text english="Opposite is the map of the two main lines with prices and durations from Ajaccio (not all station is mentionned here). For a two-way ticket, you need to double the price, there is no discount. There are about 5 trains between Ajaccio and Bastia in each direction." french="Ci-contre le plan des deux grandes lignes avec les prix et temps de trajet depuis Ajaccio (toutes les stations n'y figurent pas). Pour un aller-retour, il faut multiplier le prix par 2, il n'y a pas de réduction. Il y a environ 5 trains par jour sur l'axe Ajaccio - Bastia dans chaque sens." /></p>
                <br></br>
                <p style={{ marginBottom: "0"}}><b><Text english="" french="Liens utiles" /></b></p>
                <Link textEnglish="CFC website" textFrench="Site CFC" link="https://cf-corse.corsica/" />
                <Link textEnglish="Prices (not clear)" textFrench="Grille tarifaire (pas très claire)" link="https://cf-corse.corsica/wp-content/uploads/2019/03/Grille-tarifaire.pdf" />
                <Link textEnglish="Timetables of the main lines" textFrench="Horaires grandes lignes" link="https://cf-corse.corsica/wp-content/uploads/2020/08/Affiches-CFC-automne-hiver-2020-2021-1.pdf" />
                <Link textEnglish="Timetable of Calvi - Ile Rousse" textFrench="Horaires Calvi - L'Île Rousse" link="https://cf-corse.corsica/wp-content/uploads/2020/08/Affiches-CFC-automne-hiver-2020-2021-4.pdf" />
            </div>
            <div className={`column right`}>
                <img src="./icons/train-line.png" />
            </div>
        </div>
    );
}

export default Train;