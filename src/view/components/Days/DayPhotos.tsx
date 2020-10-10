import React from 'react';
import Text from '../LocalisationContext/Text';
import SectionHeader from '../SectionHeader/SectionHeader';
import './DayPhotos.scss';

interface IDayPhotosProps {
}

const DayPhotos : React.FC<IDayPhotosProps> = props => {
    return(
        <div className={`day-photos`}>
            <SectionHeader englishTitle="Photos and videos" englishSubtitle="" frenchTitle="Photos et vidéos" frenchSubtitle=""/>
            
        </div>
    );
}

export default DayPhotos;