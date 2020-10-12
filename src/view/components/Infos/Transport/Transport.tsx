import React from 'react';
import Text from '../../LocalisationContext/Text';
import Transition from '../../Transition/Transition';
import Car from './Car/Car';
import Ferry from './Ferry/Ferry';
import Plane from './Plane/Plane';
import Train from './Train/Train';
import './Transport.scss'
import TransportMode from './TransportMode';

interface ITransportProps {

}

const Transport : React.FC<ITransportProps> = props => {
    return(
        <div className={`transport`}>
            <h2><Text english="Transport" french="Tous les modes de transport" /></h2>
            <p><Text english="Let's talk about how to get to Corsica and out and how to get around ! We will only cover the places we have actually been to. Information and especially timetables change often, that's why we have included useful links in each section." french="On ne vous parle ici que des modes de transport que l'on a pris et des gares, ports et aéroports que l'on a fréquentés. Les horaires et informations changent souvent, c'est pourquoi des liens utiles sont inclus à la fin de chaque section."/></p>
            <div className={`transport-modes`}>
                <TransportMode english="The plane" french="L'avion" id="plane" iconSrc="./icons/plane.png" />
                <TransportMode english="The ferry" french="Le ferry" id="ferry" iconSrc="./icons/ferry.png" />
                <div></div>
                <TransportMode english="The car" french="La voiture" id="car" iconSrc="./icons/car.png" />
                <TransportMode english="The train" french="Le train" id="train" iconSrc="./icons/train.png" />
            </div>
            <Plane/>
            <Transition imageSrc="./photos/infos/transport/transition-01.png" classname={''}/>
            <Ferry />
            <Transition imageSrc="./photos/infos/transport/transition-02.png" classname={''}/>
            <Car />
            <Transition imageSrc="./photos/infos/transport/transition-03.png" classname={''}/>
            <Train />
        </div>
    );
}

export default Transport;