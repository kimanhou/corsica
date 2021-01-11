import React from 'react';
import { isMobile } from '../../../hooks/UseMediaQuery';
import FullDay from './FullDay';
import './ItineraryTable.scss';
import TableLineNumber from './TableLineNumber';
import TwoHalfDays from './TwoHalfDays';

interface IItineraryTableProps {
    positionClassname : string;
}

const ItineraryTable : React.FC<IItineraryTableProps> = props => {
    const isMobileVersion = isMobile();
    
    return(
        <div className={`table`}>
            {!isMobileVersion && 
            <div className={`table-desktop`}>
                <div className={`table-line`}>
                    <TableLineNumber numbers={["1", "2", "3", "4", "5", "6", "7"]} />
                    <div className={`days ${props.positionClassname}`}>
                        <TwoHalfDays AMenglish="Ajaccio" AMfrench="Ajaccio" AMimageSrc="./icons/village.png" PMenglish="Blood Islands - Parata Peninsula" PMfrench="Îles Sanguinaires - Pointe de la Parata" PMimageSrc="./icons/hike-no-border.png" />
                        <TwoHalfDays AMenglish="Sartene" AMfrench="Sartène" AMimageSrc="./icons/village.png" PMenglish="Roccapina" PMfrench="Roccapina" PMimageSrc="./icons/beach.png" />
                        <TwoHalfDays AMenglish="Bonifacio" AMfrench="Bonifacio" AMimageSrc="./icons/village.png" PMenglish="Campu Rumanilu hike" PMfrench="Sentier de Campu Rumanilu" PMimageSrc="./icons/hike-no-border.png" />
                        <FullDay english="Lavezzi Islands" french="Îles Lavezzi" imageSrc="./icons/beach.png" />
                        <TwoHalfDays AMenglish="Porto Vecchio" AMfrench="Porto Vecchio" AMimageSrc="./icons/village.png" PMenglish="Beaches" PMfrench="Plages" PMimageSrc="./icons/beach.png" />
                        <FullDay english="Purcaraccia pools" french="Cascades de Purcaraccia" imageSrc="./icons/hike-no-border.png" />
                        <FullDay english="Restonica Valley" french="Vallée de la Restonica" imageSrc="./icons/hike-no-border.png" />
                    </div>
                </div>
                <div className={`table-line-divider`}></div>
                <div className={`table-line`}>
                    <TableLineNumber numbers={["8", "9", "10", "11", "12", "13", "14"]} />
                    <div className={`days ${props.positionClassname}`}>
                        <FullDay english="Tavignano Gorge" french="Gorges du Tavignano" imageSrc="./icons/hike-no-border.png" />
                        <TwoHalfDays AMenglish="Corte" AMfrench="Corte" AMimageSrc="./icons/village.png" PMenglish="Bastia" PMfrench="Bastia" PMimageSrc="./icons/village.png" />
                        <FullDay english="Cap Corse" french="Cap Corse" imageSrc="./icons/village.png" />
                        <TwoHalfDays AMenglish="Agriates Desert" AMfrench="Désert des Agriates" AMimageSrc="./icons/hike-no-border.png" PMenglish="Saint Florent Ile Rousse" PMfrench="Saint Florent Île Rousse" PMimageSrc="./icons/village.png" />
                        <TwoHalfDays AMenglish="Revellata Peninsula" AMfrench="Pointe de la Revellata" AMimageSrc="./icons/hike-no-border.png" PMenglish="Calvi" PMfrench="Calvi" PMimageSrc="./icons/village.png" />
                        <TwoHalfDays AMenglish="Road to Porto" AMfrench="Route vers Porto" AMimageSrc="./icons/car-no-border.png" PMenglish="Natural reserve of Scandola and Girolata" PMfrench="Réserve naturelle de Scandola et Girolata" PMimageSrc="./icons/boat.png" />
                        <TwoHalfDays AMenglish="Calanques de Piana" AMfrench="Calanques de Piana" AMimageSrc="./icons/hike-no-border.png" PMenglish="Road to Ajaccio" PMfrench="Route vers Ajaccio" PMimageSrc="./icons/car-no-border.png" />
                    </div>
                </div>
            </div>
            }

            {isMobileVersion && 
            <div className={`table-mobile`}>
                <div className={`table-line`}>
                    <TableLineNumber numbers={["1", "2"]} isMobile lineNumber={1} />
                    <div className={`days ${props.positionClassname}`}>
                        <TwoHalfDays AMenglish="Ajaccio" AMfrench="Ajaccio" AMimageSrc="./icons/village.png" PMenglish="Blood Islands - Parata Peninsula" PMfrench="Îles Sanguinaires - Pointe de la Parata" PMimageSrc="./icons/hike-no-border.png" isMobile lineNumber={1} />
                        <TwoHalfDays AMenglish="Sartene" AMfrench="Sartène" AMimageSrc="./icons/village.png" PMenglish="Roccapina" PMfrench="Roccapina" PMimageSrc="./icons/beach.png" isMobile lineNumber={1} />
                    </div>
                </div>
                <div className={`table-line`}>
                    <TableLineNumber numbers={["3", "4"]} isMobile lineNumber={1} />
                    <div className={`days ${props.positionClassname}`}>   
                        <TwoHalfDays AMenglish="Bonifacio" AMfrench="Bonifacio" AMimageSrc="./icons/village.png" PMenglish="Campu Rumanilu hike" PMfrench="Sentier de Campu Rumanilu" PMimageSrc="./icons/hike-no-border.png" isMobile lineNumber={1} />
                        <FullDay english="Lavezzi Islands" french="Îles Lavezzi" imageSrc="./icons/beach.png" isMobile lineNumber={1} />
                    </div>
                </div>
                <div className={`table-line`}>
                    <TableLineNumber numbers={["5", "6", "7"]} isMobile lineNumber={2} />
                    <div className={`days ${props.positionClassname}`}>
                        <TwoHalfDays AMenglish="Porto Vecchio" AMfrench="Porto Vecchio" AMimageSrc="./icons/village.png" PMenglish="Beaches" PMfrench="Plages" PMimageSrc="./icons/beach.png"  isMobile lineNumber={2} />
                        <FullDay english="Purcaraccia pools" french="Cascades de Purcaraccia" imageSrc="./icons/hike-no-border.png" isMobile lineNumber={2} />
                        <FullDay english="Restonica Valley" french="Vallée de la Restonica" imageSrc="./icons/hike-no-border.png" isMobile lineNumber={2} />
                    </div>
                </div>
                <div className={`table-line-divider`}></div>
                <div className={`table-line`}>
                    <TableLineNumber numbers={["8", "9"]} isMobile lineNumber={1} />
                    <div className={`days ${props.positionClassname}`}>
                        <FullDay english="Tavignano Gorge" french="Gorges du Tavignano" imageSrc="./icons/hike-no-border.png" isMobile lineNumber={1} />
                        <TwoHalfDays AMenglish="Corte" AMfrench="Corte" AMimageSrc="./icons/village.png" PMenglish="Bastia" PMfrench="Bastia" PMimageSrc="./icons/village.png" isMobile lineNumber={1} />
                    </div>
                </div>
                <div className={`table-line`}>
                    <TableLineNumber numbers={["10", "11"]} isMobile lineNumber={1} />
                    <div className={`days ${props.positionClassname}`}>
                        <FullDay english="Cap Corse" french="Cap Corse" imageSrc="./icons/village.png" isMobile lineNumber={1} />
                        <TwoHalfDays AMenglish="Agriates Desert" AMfrench="Désert des Agriates" AMimageSrc="./icons/hike-no-border.png" PMenglish="Saint Florent Ile Rousse" PMfrench="Saint Florent Île Rousse" PMimageSrc="./icons/village.png" isMobile lineNumber={2} />
                    </div>
                </div>
                <div className={`table-line`}>
                    <TableLineNumber numbers={["12", "13", "14"]} isMobile lineNumber={2} />
                    <div className={`days ${props.positionClassname}`}>
                        <TwoHalfDays AMenglish="Revellata Peninsula" AMfrench="Pointe de la Revellata" AMimageSrc="./icons/hike-no-border.png" PMenglish="Calvi" PMfrench="Calvi" PMimageSrc="./icons/village.png" isMobile lineNumber={2} />
                        <TwoHalfDays AMenglish="Road to Porto" AMfrench="Route vers Porto" AMimageSrc="./icons/car-no-border.png" PMenglish="Natural reserve of Scandola and Girolata" PMfrench="Réserve naturelle de Scandola et Girolata" PMimageSrc="./icons/boat.png" isMobile lineNumber={2} />
                        <TwoHalfDays AMenglish="Calanques de Piana" AMfrench="Calanques de Piana" AMimageSrc="./icons/hike-no-border.png" PMenglish="Road to Ajaccio" PMfrench="Route vers Ajaccio" PMimageSrc="./icons/car-no-border.png" isMobile lineNumber={2} />
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default ItineraryTable;