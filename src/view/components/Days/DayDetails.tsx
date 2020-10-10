import React from 'react';
import Text from '../LocalisationContext/Text';
import SectionHeader from '../SectionHeader/SectionHeader';
import './DayDetails.scss';

interface IDayDetailsProps {
    isFullDay : boolean;
    morning : React.ReactNode;
    afternoon : React.ReactNode;
    useful : React.ReactNode;
}

const DayDetails : React.FC<IDayDetailsProps> = props => {
    return(
        <div className={`day-details`}>
            <SectionHeader englishTitle="Details of the day" englishSubtitle="" frenchTitle="Détails de la journée" frenchSubtitle=""/>
            <div className={`column left`}>
                {props.isFullDay && 
                <div className={`day-details-full-day`}>
                    {props.morning}
                </div>}
                {!props.isFullDay && 
                <div className={`day-details-half-days`}>
                    <div className={`am`}>
                        <h2><Text english="Morning" french="Matin" /></h2>
                        {props.morning}
                    </div>
                    <div className={`pm`}>
                        <h2><Text english="Afternoon" french="Apres midi" /></h2>
                        {props.afternoon}
                    </div>
                </div>}
            </div>
            <div className={`column middle`}></div>
            <div className={`column right`}>
                <h2><Text english="The useful corner" french="Le cote pratique" /></h2>
                {props.useful}
            </div>
        </div>
    );
}

export default DayDetails;