import React from 'react';
import { isMobile } from '../../../hooks/UseMediaQuery';
import SectionHeader from '../../SectionHeader/SectionHeader';
import { IPhotoData } from '../Day';
import './DayPhotos.scss';

interface IDayPhotosProps {
    photos : IPhotoData[];
    dayNumber : number;
}

const DayPhotos : React.FC<IDayPhotosProps> = props => {
    const path = `./photos/days/${props.dayNumber}/`;
    const getUrl = (mediaName : string) => {
        return path + mediaName ;
    }
    
    const shouldNotAutoPlay = isMobile();

    const renderGridItem = (photoName : string, gridItemType : string, isVideo ?: boolean) => {
        return (
            <div className={`grid-item ${gridItemType}`}>
                {isVideo && <video width="100%" autoPlay={!shouldNotAutoPlay} loop muted>
                        <source src={getUrl(photoName)} type="video/mp4" />
                    </video>}
                {!isVideo && <img src={getUrl(photoName)} />}
            </div>
        )
    }

    return(
        <div className={`day-photos`}>
            <SectionHeader englishTitle="Photos and videos" englishSubtitle="" frenchTitle="Photos et vidéos" frenchSubtitle=""/>
            <div className={`photos-container`}>
                <div className={'masonry'}>
                    {props.photos.map(t => renderGridItem(t.photoName, t.gridItemType, t.isVideo))}
                </div>
            </div>
        </div>
    );
}

export default DayPhotos;