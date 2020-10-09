import React, { useState } from 'react';
import Text from '../../../LocalisationContext/Text';
import './Port.scss';

interface IPortProps {
    englishName : string;
    frenchName : string;
    details : React.ReactNode;
}

const Port : React.FC<IPortProps> = props => {
    const [isVisible, setIsVisible] = useState(false);
    var isVisibleClassname = isVisible ? "visible" : "";
    const onClick = () => {
        setIsVisible(!isVisible);
    }

    return(
        <div className={`port`}>
            <div className={`name`} onClick={onClick}>
                <Text english={props.englishName} french={props.frenchName} /> ⌄
            </div>
            <div className={`details ${isVisibleClassname}`}>
                {props.details}
            </div>
        </div>
    );
}

export default Port;