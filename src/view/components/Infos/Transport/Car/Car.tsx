import React from 'react';
import Text from '../../../LocalisationContext/Text';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import './Car.scss'
import CarDetail from './CarDetail';

interface ICarProps {
}

const Car : React.FC<ICarProps> = props => {
    return(
        <div className={`car`} id={`car`}>
            <SectionHeader englishTitle="The car" englishSubtitle="vital" frenchTitle="La voiture" frenchSubtitle="l indispensable" />
            <div className={`column left`}>
                <p><b><Text english="Our key figures" french="Nos chiffres" /></b>
                <Text english=" : for 14 days" french=" : pour 14 jours" /></p>
                <CarDetail iconSrc="./icons/rental-car.png" text={
                    <p>
                        <div className={`normal`}><Text english="655.10€" french="655,10€" /></div>
                        <div className={`space`}></div>
                        <div className={`small`}><Text english="with 35€ of extra for a 2nd driver" french="dont 35€ d'extra pour un 2e conducteur" /></div>
                        <br></br> 
                        <Text english="=> 47€/day for a 5 door Clio" french="=> 47€/jour pour une Clio 5 portes" />
                    </p>
                } />
                <CarDetail iconSrc="./icons/gas.png" text={<p><Text english="86.33€ of gas" french="86,33€ d'essence" /></p>} />
                <CarDetail iconSrc="./icons/car-wash.png" text={
                    <p>
                        <Text english="6€ for a hand wash" french="6€ pour un nettoyage à la main" />
                        <div className={`space`}></div>
                        <div className={`small`}><Text english="half if you are not a germ freak" french="il est possible de dépenser la moitié si vous n’êtes pas des psychopathes de la propreté" /></div>
                    </p>
                } />
                <CarDetail iconSrc="./icons/parking.png" text={<p><Text english="21.20€ of parking" french="21,20€ de parking" /></p>} />
                <img src="./photos/infos/transport/car.jpg" />
            </div>
            <div className={`column middle`}></div>
            <div className={`column right`}>
                <p><Text english="To get around in Corsica," french="Pour se déplacer en Corse, " />
                    <b><Text english=" you don't really have a choice : you need a car !" french="pas le choix : il faut une voiture !" /></b>
                    <Text english=" Public transports do exist and connect major cities, however, as a regular tourist, the network is sadly not enough. We won't talk here about lunatics going around by bike because we consider that our readers are sane. Hitchhiking can also be a solution for short distances, like going to the starting point of a major hike ." french=" Les transports en commun existent et relient les majeures villes de l'île entre elles, mais pour un touriste classique, le réseau ne suffit malheureusement pas. On ne parlera pas non plus des énergumènes qui se déplacent en vélo car on veut rester dans un cadre sain d'esprit. Il y a aussi le stop, qui peut bien marcher sur de courtes distances." />
                    <br></br>
                    <br></br>
                    <Text english="Thus is rental car inevitable for many travellers. The car needs to be returned clean, interior and exterior. Cleaning stations can be found in big gas stations. There you can find vaccum cleaners and water jets, that you pay by the time." french="La location de voitures est donc incontournable pour beaucoup de voyageurs, l’île importe notamment 25 000 véhicules du continent chaque été (chiffre donné par l’un de nos hôtes Airbnb, peut être sujet à exagération). Il faut rendre la voiture propre, extérieur comme intérieur. On peut trouver des stations de lavage dans les grosses stations service, équipées d’aspirateurs et de “tuyaux d’arrosage” qu’on paye au temps." />
                    <br></br>
                    <br></br>
                    <Text english="There are a lot of " french="Il y a beaucoup de " />
                    <b><Text english="narrow and winding mountain roads" french="routes de montagne très étroites et sinueuses" /></b>
                    <Text english=", the worst of them are in Cap Corse and on the North West coast between Bastia, Saint-Florent, Ile Rousse, Calvi and Porto. Passing locals on those roads is a delicate task, some just give up and fold in both mirrors to gain a few centimeters. " french=", les pires se trouvant au Cap Corse et sur la côte Nord-Ouest entre Bastia, Saint Florent, l’Île Rousse, Calvi et Porto. Les croisements avec les locaux sont délicats, certains abandonnent carrément et replient leurs deux rétroviseurs pour gagner quelques centimètres. " />
                    <b><Text english="In city centers, parking is almost always paid" french="Le parking en ville est presque toujours payant" /></b>
                    <Text english=", you need to get out a bit to find free parking spots. Parking lots at popular hikes' starting point get full really fast, better be there before 9am. Gas is more expensive than on the continent, however finding a gas station is easy everywhere in Corsica." french=", il faut s’éloigner pour trouver des places gratuites. Les parkings au départ des randonnés les plus populaires se remplissent vite, mieux vaut arriver avant 9h. L’essence est plus chère que sur le continent mais il est facile de trouver une station service partout en Corse." /> 
                </p>
                <img src="./icons/moutain-road.png"/>
            </div>
        </div>
    );
}

export default Car;