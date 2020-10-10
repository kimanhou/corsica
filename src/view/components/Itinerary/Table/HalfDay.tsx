import React from 'react';
import Text from '../../LocalisationContext/Text';
import './HalfDay.scss';

interface IHalfDayProps {
    english : string;
    french : string;
    imageSrc : string;
}

const HalfDay : React.FC<IHalfDayProps> = props => {
    return(
        <div className={`half-day`}>
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

export default HalfDay;