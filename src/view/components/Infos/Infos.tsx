import React, { useState } from 'react';
import Accommodation from './Accommodation/Accommodation';
import Food from './Food/Food';
import './Infos.scss';
import SectionTitle from './SectionTitle';
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
            <SectionTitle english="Transport" french="Se déplacer" activeClassname={`first ${transportActiveClassname}`} setCurrentSection={() => setCurrentSection(InfoSection.transport)}/>
            <SectionTitle english="Accommodation" french="Se loger" activeClassname={accommodationActiveClassname} setCurrentSection={() => setCurrentSection(InfoSection.accommodation)}/>
            <SectionTitle english="Food" french="Se restaurer" activeClassname={foodActiveClassname} setCurrentSection={() => setCurrentSection(InfoSection.food)}/>

            <div className={`info-content`}>
                <InfoContent/>
            </div>
        </div>
    );
}

export default Infos;