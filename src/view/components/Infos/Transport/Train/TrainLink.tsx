import React from 'react';
import Text from '../../../LocalisationContext/Text';
import './TrainLink.scss';

interface ITrainLinkProps {
    textEnglish : string;
    textFrench : string;
    link : string;
}

const TrainLink : React.FC<ITrainLinkProps> = props => {
    return(
        <div className={`train-link`}>
            <a href={props.link} target="_blank"><Text english={props.textEnglish} french={props.textFrench} /></a>
        </div>
    );
}

export default TrainLink;