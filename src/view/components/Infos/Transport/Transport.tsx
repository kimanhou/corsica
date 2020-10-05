import React from 'react';
import Text from '../../LocalisationContext/Text';
import './Transport.scss'

interface ITransportProps {

}

const Transport : React.FC<ITransportProps> = props => {
    return(
        <div className={`transport`}>
            <h2><Text english="Transport" french="Tous les modes de transport" /></h2>
        </div>
    );
}

export default Transport;