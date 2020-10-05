import React from 'react';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './HomePhotos.scss';
import Text from '../../LocalisationContext/Text';

interface IHomePhotosProps {}

const HomePhotos : React.FC<IHomePhotosProps> = props => {
    return(
        <div className={`home-photos`}>
            <SectionHeader englishTitle={`A sneak peak`} englishSubtitle={`photos and videos`} frenchTitle={`Un avant goût`} frenchSubtitle={`en photos et videos`} />
            <p><Text english="" french="Des photos et vidéos de chaque endroit présenté dans l'itinéraire pour vous donner un avant goût ou tout simplement vous faire voyager depuis votre canapé. Cela permet aussi de se faire une petite idée sur chaque endroit."/></p>
            <div className={`photos-container`}>
                <div className={`vertical-box`}>
                    <img src="./photos/home/photos-04.png" />
                </div>
                <div className={`middle-box`}>
                    <div className={`line one`}>
                        <div className={`first`}>
                            <img src="./photos/home/photos-05.png" />
                        </div>
                        <div className={`second`}>
                            <img src="./photos/home/photos-02.png" />
                        </div>
                    </div>
                    <div className={`line two`}>
                        <div className={`first`}>
                            <img src="./photos/home/photos-01.png" />
                        </div>
                        <div className={`second`}>
                            <img src="./photos/home/photos-03.png" />
                        </div>
                    </div>
                </div>
                <div className={`vertical-box`}>
                    <img src="./photos/home/photos-06.png" />
                </div>
            </div>
        </div>
    );
}

export default HomePhotos;