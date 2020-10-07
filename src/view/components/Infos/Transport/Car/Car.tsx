import React from 'react';
import Text from '../../../LocalisationContext/Text';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import './Car.scss'

interface ICarProps {
}

const Car : React.FC<ICarProps> = props => {
    return(
        <div className={`car`} id={`car`}>
            <SectionHeader englishTitle="The car" englishSubtitle="vital" frenchTitle="La voiture" frenchSubtitle="l indispensable" />
            <div className={`column left`}>
                <p><b><Text english="" french="Nos chiffres" /></b></p>
                <p><Text english="" french="pour 14 jours" /></p>
                <p><Text english="" french="655,10€ dont 35€ d'extra pour un 2e conducteur => 47€ / jour pour une Clio 5 portes" /></p>
                <p><Text english="" french="86,33€ d'essence" /></p>
                <p><Text english="" french="6€ pour un nettoyage à la main "/></p>
                <p><Text english="" french="il est possible de dépenser la moitié si vous n’êtes pas des psychopathes de la propreté)" /></p>
                <p><Text english="" french="21,20€ de parking" /></p>
            </div>
            <div className={`column middle`}></div>
            <div className={`column right`}>
                <p><Text english="" french="Pour se déplacer en Corse, pas le choix : il faut une voiture ! Les transports en commun existent et relient les majeures villes de l'île entre elles, mais pour un touriste classique, le réseau ne suffit malheureusement pas. On ne parlera pas non plus des énergumènes qui se déplacent en vélo car on veut rester dans un cadre sain d'esprit. Il y a aussi le stop, qui peut bien marcher sur de courtes distances.

La location de voitures est donc incontournable pour beaucoup de voyageurs, l’île importe notamment 25 000 véhicules du continent chaque été (chiffre donné par l’un de nos hôtes Airbnb, peut être sujet à exagération). Il faut rendre la voiture propre, extérieur comme intérieur. On peut trouver des stations de lavage dans les grosses stations service, équipées d’aspirateurs et de “tuyaux d’arrosage” qu’on paye au temps. 

Il y a beaucoup de routes de montagne très étroites et sinueuses, les pires se trouvant au Cap Corse et sur la côte Nord-Ouest entre Bastia, Saint Florent, l’Île Rousse, Calvi et Porto. Les croisements avec les locaux sont délicats, certains abandonnent carrément et replient leurs deux rétroviseurs pour gagner quelques centimètres. Le parking en ville est presque toujours payant, il faut s’éloigner pour trouver des places gratuites. Les parkings au départ des randonnés les plus populaires se remplissent, mieux vaut arriver avant 9h. L’essence est plus chère que sur le continent mais il est facile de trouver une station service partout en Corse." /></p>
            </div>
        </div>
    );
}

export default Car;