import React from 'react';
import { IContentProps, InfoSection } from '../../../App';
import Accommodation from './Accommodation/Accommodation';
import Food from './Food/Food';
import './Infos.scss';
import SectionTitle from './SectionTitle';
import Transport from './Transport/Transport';

interface IInfosProps extends IContentProps {
}


const Infos : React.FC<IInfosProps> = props => {
  let InfoContent : React.FC;
  switch (props.currentSection) {
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
    var transportActiveClassname = props.currentSection == InfoSection.transport ? "active" : "";
    var accommodationActiveClassname = props.currentSection == InfoSection.accommodation ? "active" : "";
    var foodActiveClassname = props.currentSection == InfoSection.food ? "active" : "";

    return(
        <div className={`infos`}>
            <SectionTitle english="Transport" french="Se déplacer" activeClassname={`first ${transportActiveClassname}`} setCurrentSection={() => props.setCurrentSection(InfoSection.transport)}/>
            <SectionTitle english="Accommodation" french="Se loger" activeClassname={accommodationActiveClassname} setCurrentSection={() => props.setCurrentSection(InfoSection.accommodation)}/>
            <SectionTitle english="Food" french="Se restaurer" activeClassname={foodActiveClassname} setCurrentSection={() => props.setCurrentSection(InfoSection.food)}/>

            <div className={`info-content`}>
                <InfoContent/>
            </div>
        </div>
    );
}

export default Infos;