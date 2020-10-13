import React from 'react';
import Text from '../../../LocalisationContext/Text';
import './AjaccioAirportTransport.scss';

interface IAjaccioAirportTransportProps {
    line : string;
    lineImageSrc : string;
    departure : string;
    departureLink : string;
    arrival : string;
    arrivalLink : string;
    price : React.ReactNode;
    walk : string;
    walkLink : string;
}

const AjaccioAirportTransport : React.FC<IAjaccioAirportTransportProps> = props => {
    return(
        <div className={`ajaccio-airport-transport`}>
            <div className={`title`}>
                <p><Text english="Line :" french="Ligne :" /></p>
            </div>
            <div className={`middle`}></div>
            <div className={`image-container`}>
                <img src={props.lineImageSrc}/>
            </div>
            <div className={`middle`}></div>
            <div className={`data`}>
                <p>{props.line}</p>
            </div>
            <br></br>
            <div className={`title`}>
                <p><Text english="Departure :" french="Départ :" /></p>
            </div>
            <div className={`middle`}></div>
            <div className={`data`}>
                <p><a href={props.departureLink} target='_blank'><Text english="Bus stop " french="Arrêt " />{props.departure}</a></p>
            </div>
            <div className={`title`}>
                <p><Text english="Arrival :" french="Arrivée :" /></p>
            </div>
            <div className={`middle`}></div>
            <div className={`data`}>
                <p><a href={props.arrivalLink} target='_blank'><Text english="Bus stop " french="Arrêt " />{props.arrival}</a></p>
            </div>
            <br></br>
            <div className={`title`}>
                <p><Text english="Price :" french="Prix :" /></p>
            </div>
            <div className={`middle`}></div>
            <div className={`data`}>
                <p>{props.price}</p>
            </div>
            <div className={`title`}>
                <p><Text english="Walking time :" french="Temps de marche :" /></p>
            </div>
            <div className={`middle`}></div>
            <div className={`data`}>
                <p><a href={props.walkLink} target='_blank'><Text english={props.walk} french={props.walk} /></a></p>
            </div>
        </div>
    );
}

export default AjaccioAirportTransport;