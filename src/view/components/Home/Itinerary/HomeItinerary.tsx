import React from 'react';
import Text from '../../LocalisationContext/Text';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './HomeItinerary.scss';
import Map from './Map';

interface IHomeItineraryProps {

}

const HomeItinerary : React.FC<IHomeItineraryProps> = props => {
    return (
        <div className={`home-itinerary`}>
            <SectionHeader englishTitle={`Around the island`} englishSubtitle={`in two weeks`} frenchTitle={`Le tour de l'île`} frenchSubtitle={`en deux semaines`} />
            <div className={`left`}>
                <Map />
            </div>
            <div className={`right`}>
                <h3><Text english={``} french={`Faire le tour de l'île en deux semaines ?`} /></h3>
                <h3><Text english={`Yes, you can !`} french={`Oui c'est possible !`} /></h3>
                <div className={`space`}></div>
                <p><Text english={``} french={`On vous propose ici l'itinéraire que nous avons créé et suivi pendant deux semaines en septembre 2020. Il mêle plages, randonnées et visites de villages. Il est facilement adaptable selon les goûts et préférences de chacun, mais aussi selon le temps disponible. On vous donne le détail jour par jour avec nos impressions et astuces découvertes sur place.`} /></p>
                <p><Text english={``} french={`Amateurs de plongée ? De villages pittoresques ? De randonnées sportives ? `} />
                <Text english={``} french={`Tout le monde pourra trouver son bonheur en Corse !`} /></p>
            </div>
        </div>
    );
}

export default HomeItinerary;