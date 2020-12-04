import React from 'react';
import { IContentProps, InfoSection } from '../../../App';
import Transition from '../Transition/Transition';
import './Home.scss';
import HomeInfo from './Info/HomeInfo';
import HomeItinerary from './Itinerary/HomeItinerary';
import HomePhotos from './Photos/HomePhotos';

interface IHomeProps extends IContentProps {}

const Home : React.FunctionComponent<IHomeProps> = props => {
  return (
    <div className={`home`}>
      <div className={`home-image-container`}>
        <img src="./photos/home/home.jpg" className={`home-image`}/>
      </div>
      <HomeItinerary setCurrentPage={props.setCurrentPage}/>
      <Transition classname="home-itinerary-info" imageSrc="./photos/home/transition.jpg" />
      <HomeInfo setCurrentPage={props.setCurrentPage} setCurrentSection={props.setCurrentSection}/>
      <HomePhotos setCurrentPage={props.setCurrentPage} />
    </div>
  )
}
export default Home;