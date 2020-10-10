import React, { useState } from 'react';
import { IContentProps, Page } from '../../../App';
import { myScrollTo } from '../../../Util';
import Text from '../LocalisationContext/Text';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './Itinerary.scss';
import ItineraryNutshell from './ItineraryNutshell';
import ItinerarySectionTitle from './ItinerarySectionTitle';

interface IItineraryProps extends IContentProps {
}

const Itinerary : React.FC<IItineraryProps> = props => {
    const onClickNutshell = () => {
        myScrollTo(`itinerary-nutshell`);
    }

    const onClickBreakdown = () => {
        props.setCurrentPage(Page.dayPage);
    }
    
    var [onActiveClassname, setOnActiveClassname] = useState("");
    const onActive = () => {
        setOnActiveClassname("active");
    }

    const onUnactive = () => {
        setOnActiveClassname("");
    }

    return(
        <div className={`itinerary`}>
            <div className={`columns ${onActiveClassname}`}>
                <div className={`column left`}>
                    <div className={`image-container one`}>
                        <img src="./photos/itinerary/01.png" />
                    </div>
                    <div className={`image-container two`}>
                        <img src="./photos/itinerary/02.png" />
                    </div>
                    <div className={`image-container three`}>
                        <img src="./photos/itinerary/03.png" />
                    </div>
                </div>
                <div className={`column middle`}>
                    <h1>
                        <Text english="Our Corsica" french="Le tour"/>
                        <br></br>
                        <Text english="road trip" french="de la Corse" />
                    </h1>
                    <ScreenDetector onActive={onActive} onUnactive={onUnactive} className={`screen-detector`} />
                    <h2><Text english="in two weeks" french="en deux semaines"/></h2>
                    <ItinerarySectionTitle english="The itinerary in a nutshell" french="L'itinéraire en un clin d'oeil" onClick={onClickNutshell} />
                    <ItinerarySectionTitle english="Day by day breakdown" french="Le détail jour par jour" onClick={onClickBreakdown}/>
                </div>
                <div className={`column right`}>
                    <div className={`image-container one`}>
                        <img src="./photos/itinerary/04.png" />
                    </div>
                    <div className={`image-container two`}>
                        <img src="./photos/itinerary/05.png" />
                    </div>
                    <div className={`image-container three`}>
                        <img src="./photos/itinerary/06.png" />
                    </div>
                </div>
            </div>

            <ItineraryNutshell/>
        </div>
    );
}

export default Itinerary;