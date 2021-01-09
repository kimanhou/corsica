import React, { useState } from 'react';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './HomePhotos.scss';
import Text from '../../LocalisationContext/Text';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import { IContentProps, Page } from '../../../../App';
import { isMobile } from '../../../hooks/UseMediaQuery';

interface IHomePhotosProps {
    setCurrentPage : (currentPage : Page) => void;
}

const HomePhotos : React.FC<IHomePhotosProps> = props => {
    var [onActiveClassname, setOnActiveClassname] = useState("");
    const onActive = () => {
        setOnActiveClassname("active");
    }

    const onUnactive = () => {
        setOnActiveClassname("");
    }

    const shouldNotAutoPlay = isMobile();

    return(
        <div className={`home-photos`}>
            <SectionHeader englishTitle={`A sneak peak`} englishSubtitle={`photos and videos`} frenchTitle={`Un avant goût`} frenchSubtitle={`en photos et videos`} setCurrentPage={props.setCurrentPage} page={Page.photos}/>
            <p><Text english="Here we show you pictures and videos of all the places we have been and that are included in our two week itinerary. A sneak peak of what is awaiting you or just a way to get a taste of travel from a couche, enjoy the view !" french="Des photos et vidéos de chaque endroit présenté dans l'itinéraire pour vous donner un avant goût ou tout simplement vous faire voyager depuis votre canapé. Cela permet aussi de se faire une petite idée sur chaque endroit."/></p>
            <div className={`photos-container-relative`}>
                <ScreenDetector onActive={onActive} onUnactive={onUnactive} className={`screen-detector`}/>
                <div className={`photos-container ${onActiveClassname}`}>
                    <div className={`vertical-box`}>
                        <video autoPlay={!shouldNotAutoPlay} loop muted>
                            <source src="./videos/01.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className={`vertical-box-cover left`}></div>
                    </div>
                    <div className={`middle-box`}>
                        <div className={`line one`}>
                            <div className={`first`}>
                                <img src="./photos/home/photos-05.jpg" />
                                <div className={`square-box-cover line-one`}></div>
                            </div>
                            <div className={`second`}>
                                <img src="./photos/home/photos-02.jpg" />
                                <div className={`horizontal-box-cover line-one`}></div>
                            </div>
                        </div>
                        <div className={`line two`}>
                            <div className={`first`}>
                                <img src="./photos/home/photos-01.jpg" />
                                <div className={`horizontal-box-cover line-two`}></div>
                            </div>
                            <div className={`second`}>
                                <img src="./photos/home/photos-03.jpg" />
                                <div className={`square-box-cover line-two`}></div>
                            </div>
                        </div>
                    </div>
                    <div className={`vertical-box`}>
                        <img src="./photos/home/photos-06.jpg" />
                        <div className={`vertical-box-cover right`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePhotos;