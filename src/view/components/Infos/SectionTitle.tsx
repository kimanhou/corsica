import React from 'react';
import Text from '../LocalisationContext/Text';
import './Infos.scss';

interface ISectionTitleProps {
    english : string;
    french : string;
    activeClassname : string;
    setCurrentSection : () => void;
}

const SectionTitle : React.FC<ISectionTitleProps> = props => {
    return(
        <div className={`section-title ${props.activeClassname}`} onClick={props.setCurrentSection}>
            <Text english={props.english} french={props.french} />
            <div className={`underline`}></div>
        </div>
    );
}

export default SectionTitle;