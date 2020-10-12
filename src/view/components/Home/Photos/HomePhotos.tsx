import React, { useState } from 'react';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './HomePhotos.scss';
import Text from '../../LocalisationContext/Text';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import { IContentProps, Page } from '../../../../App';

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

    return(
        <div className={`home-photos`}>
            <SectionHeader englishTitle={`A sneak peak`} englishSubtitle={`photos and videos`} frenchTitle={`Un avant goût`} frenchSubtitle={`en photos et videos`} setCurrentPage={props.setCurrentPage} page={Page.photos}/>
            <p><Text english="" french="Des photos et vidéos de chaque endroit présenté dans l'itinéraire pour vous donner un avant goût ou tout simplement vous faire voyager depuis votre canapé. Cela permet aussi de se faire une petite idée sur chaque endroit."/></p>
            <div className={`photos-container-relative`}>
                <ScreenDetector onActive={onActive} onUnactive={onUnactive} className={`screen-detector`}/>
                <div className={`photos-container ${onActiveClassname}`}>
                    <div className={`vertical-box`}>
                        <video autoPlay loop muted>
                            <source src="./videos/01.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className={`vertical-box-cover left`}></div>
                    </div>
                    <div className={`middle-box`}>
                        <div className={`line one`}>
                            <div className={`first`}>
                                <img src="./photos/home/photos-05.png" />
                                <div className={`square-box-cover line-one`}></div>
                            </div>
                            <div className={`second`}>
                                <img src="./photos/home/photos-02.png" />
                                <div className={`horizontal-box-cover line-one`}></div>
                            </div>
                        </div>
                        <div className={`line two`}>
                            <div className={`first`}>
                                <img src="./photos/home/photos-01.png" />
                                <div className={`horizontal-box-cover line-two`}></div>
                            </div>
                            <div className={`second`}>
                                <img src="./photos/home/photos-03.png" />
                                <div className={`square-box-cover line-two`}></div>
                            </div>
                        </div>
                    </div>
                    <div className={`vertical-box`}>
                        <img src="./photos/home/photos-06.png" />
                        <div className={`vertical-box-cover right`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePhotos;