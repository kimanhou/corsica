import React from 'react';
import Text from '../../LocalisationContext/Text';
import './FullDay.scss';

interface IFullDayProps {
    english : string;
    french : string;
    imageSrc : string;
}

const FullDay : React.FC<IFullDayProps> = props => {
    return(
        <div className={`full-day`}>
            <div className={`flippable`}>
                <div className={`front`}>
                    <p><Text english={props.english} french={props.french} /></p>
                </div>
                <div className={`back`}>
                    <img src={props.imageSrc} />
                </div>
            </div>
        </div>
    );
}

export default FullDay;