import React from 'react';
import Text from '../../LocalisationContext/Text';
import './FullDay.scss';

interface IFullDayProps {
    english : string;
    french : string;
    imageSrc : string;
    isMobile ?: boolean;
    lineNumber ?: number;
}

const FullDay : React.FC<IFullDayProps> = props => {
    const isMobileClassname = props.isMobile ? 'is-mobile' : '';
    const lineNumber1 = props.lineNumber == 1 ? 'line-1' : '';
    const lineNumber2 = props.lineNumber == 2 ? 'line-2' : '';

    return(
        <div className={`full-day ${isMobileClassname} ${lineNumber1} ${lineNumber2}`}>
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