import React from 'react';
import { myScrollTo } from '../../../../Util';
import Text from '../../LocalisationContext/Text';
import './TransportMode.scss'

interface ITransportModeProps {
    english : string;
    french : string;
    iconSrc : string;
    id : string;
}

const TransportMode : React.FC<ITransportModeProps> = props => {
    const onClick = () => {
        myScrollTo(props.id);
    }
    
    return(
        <div className={`transport-mode`} onClick={onClick}>
            <div className={`icon`}>
                <img src={props.iconSrc}/>
            </div>
            <div className={`text`}>
                <p><Text english={props.english} french={props.french}/></p>
            </div>
        </div>
    );
}

export default TransportMode;