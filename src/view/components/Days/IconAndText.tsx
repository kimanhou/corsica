import React from 'react';
import Text from '../LocalisationContext/Text';
import './IconAndText.scss';

interface IIconAndTextProps {
    englishText : string;
    frenchText : string;
    iconSrc : string;
}

const IconAndText : React.FC<IIconAndTextProps> = props => {
    return(
        <div className={`icon-and-text`}>
            <div className={`image-container`}>
                <img src={props.iconSrc}/>
            </div>
            <div className={`middle`}></div>
            <div className={`text-container`}>
                <p><Text english={props.englishText} french={props.frenchText} /></p>
            </div>
        </div>
    );
}

export default IconAndText;