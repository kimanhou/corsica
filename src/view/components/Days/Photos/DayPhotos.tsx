import React from 'react';
import Text from '../../LocalisationContext/Text';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './DayPhotos.scss';

interface IDayPhotosProps {
    photos : React.ReactNode;
}

const DayPhotos : React.FC<IDayPhotosProps> = props => {
    return(
        <div className={`day-photos`}>
            <SectionHeader englishTitle="Photos and videos" englishSubtitle="" frenchTitle="Photos et vidéos" frenchSubtitle=""/>
            {props.photos}
            {/* <div className={`photos-container`}>
                <div className={`row`}>
                    <div className={`column`}>
                        <div className={`image p111`} style={{
                            backgroundImage : `url('./photos/days/1/1.jpg')`
                        }}>
                        </div>
                        <div className={`image p112`} style={{
                            backgroundImage : `url('./photos/days/1/2.jpg')`
                        }}>
                        </div>
                    </div>
                    <div className={`column`}>
                        <div className={`image p121`} style={{
                            backgroundImage : `url('./photos/days/1/3.jpg')`
                        }}>
                        </div>
                        <div className={`image p122`} style={{
                            backgroundImage : `url('./photos/days/1/4.jpg')`
                        }}>
                        </div>
                    </div>
                    <div className={`column`}>
                        <div className={`image p131`} style={{
                            backgroundImage : `url('./photos/days/1/5.jpg')`
                        }}>
                        </div>
                        <div className={`image p132`} style={{
                            backgroundImage : `url('./photos/days/1/6.jpg')`
                        }}>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`column`}>
                        <div className={`image p211`} style={{
                            backgroundImage : `url('./photos/days/1/7.jpg')`
                        }}>
                        </div>
                        <div className={`image p212`} style={{
                            backgroundImage : `url('./photos/days/1/8.jpg')`
                        }}>
                        </div>
                    </div>
                    <div className={`column`}>
                        <div className={`image p221`} style={{
                            backgroundImage : `url('./photos/days/1/9.jpg')`
                        }}>
                        </div>
                        <div className={`image p222`} style={{
                            backgroundImage : `url('./photos/days/1/10.jpg')`
                        }}>
                        </div>
                    </div>
                    <div className={`column`}>
                        <div className={`image p231`}>
                            <video width="100%" autoPlay loop muted>
                                <source src="./photos/days/1/11.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className={`image p3`} style={{
                        backgroundImage : `url('./photos/days/1/12.jpg')`
                    }}>
                </div>
            </div> */}
        </div>
    );
}

export default DayPhotos;