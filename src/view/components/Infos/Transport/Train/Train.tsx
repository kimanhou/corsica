import React from 'react';
import Text from '../../../LocalisationContext/Text';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import './Train.scss'

interface ITrainProps {
}

const Train : React.FC<ITrainProps> = props => {
    return(
        <div className={`train`} id={`train`}>
            <SectionHeader englishTitle="The train" englishSubtitle="" frenchTitle="Le train" frenchSubtitle="l insolite" />
            <div className={`column left`}>
                <p><Text english="" french="Pour être tout à fait honnête, je ne sais pas pourquoi on a pris le train en Corse. Sûrement par habitude que ce moyen de transport soit sur le continent le plus pratique et rapide pour relier deux grandes villes. Mais en fait non.... C'est lent, inconfortable, pas excessivement propre et pas si peu cher que ca. La ligne de chemin de fer suit la route. Entre Corte et Bastia, on peut apprécier de beaux paysages. Une seule compagnie règne sur toute l'île : Chemins de Fer Corse (CFC). Aux alentours d'Ajaccio et de Bastia, le train fait office de métro/tram. Les locaux le prennent pour se rendre à l'école ou au travail. Ensuite, il s'apparente plus à un TER qui dessert les villages en campagne. Les annonces sont exclusivement en Corse. Les billets sont à acheter le jour même à la gare de départ ou dans le train auprès du contrôleur, il n'est pas possible d'acheter un billet à l'avance. Les places ne sont pas attribuées." /> </p>
                <p><Text english="" french="Ci-contre le plan des deux grandes lignes avec les prix et temps de trajet depuis Ajaccio (toutes les stations n'y figurent pas). Pour un aller-retour, il faut multiplier le prix par 2, il n'y a pas de réduction. Il y a environ 5 trains par jour sur l'axe Ajaccio - Bastia dans chaque sens." /></p>
                <p><b><Text english="" french="Liens utiles" /></b></p>
                <p><Text english="" french="Site CFC" /></p>
                <p><Text english="" french="Grille tarifaire (pas très claire)" /></p>
                <p><Text english="" french="Horaires grandes lignes  "/></p>
                <p><Text english="" french="Horaires Calvi - L'Île Rousse" /></p>
            </div>
            <div className={`column middle`}></div>
            <div className={`column right`}>
            </div>
        </div>
    );
}

export default Train;