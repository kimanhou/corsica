import React from 'react';
import Text from '../../LocalisationContext/Text';
import './Link.scss';

interface ILinkProps {
    textEnglish : string;
    textFrench : string;
    link : string;
}

const Link : React.FC<ILinkProps> = props => {
    return(
        <div className={`link`}>
            <a href={props.link} target="_blank"><Text english={props.textEnglish} french={props.textFrench} /></a>
        </div>
    );
}

export default Link;