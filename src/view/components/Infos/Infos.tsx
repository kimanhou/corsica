import React, { useState } from 'react';
import Text from '../LocalisationContext/Text';
import Accommodation from './Accommodation/Accommodation';
import Food from './Food/Food';
import './Infos.scss';
import Transport from './Transport/Transport';

interface IInfosProps {
}

export enum InfoSection {
    transport,
    accommodation,
    food
  }

const Infos : React.FC<IInfosProps> = props => {
    const [currentSection, setCurrentSection] = useState(InfoSection.transport);
    let InfoContent : React.FC;
    switch (currentSection) {
        case InfoSection.transport:
            InfoContent = Transport;
        break;
        case InfoSection.accommodation:
            InfoContent = Accommodation;
        break;
        case InfoSection.food:
            InfoContent = Food;
        break;
    }
    var transportActiveClassname = currentSection == InfoSection.transport ? "active" : "";
    var accommodationActiveClassname = currentSection == InfoSection.accommodation ? "active" : "";
    var foodActiveClassname = currentSection == InfoSection.food ? "active" : "";

    return(
        <div className={`infos`}>
            <div className={`section-title first ${transportActiveClassname}`} onClick={() => setCurrentSection(InfoSection.transport)}>
                <Text english="Transport" french="Se déplacer" />
            </div>
            <div className={`section-title ${accommodationActiveClassname}`} onClick={() => setCurrentSection(InfoSection.accommodation)}>
                <Text english="Accommodation" french="Se loger" />
            </div>
            <div className={`section-title ${foodActiveClassname}`} onClick={() => setCurrentSection(InfoSection.food)}>
                <Text english="Food" french="Se restaurer" />
            </div>
            <div className={`underline ${currentSection.toString()}`}></div>

            <div className={`info-content`}>
                <InfoContent/>
            </div>
        </div>
    );
}

export default Infos;