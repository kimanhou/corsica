import React from 'react';
import { IContentProps } from '../../../App';
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
        <img src="./photos/home/home.png" className={`home-image`}/>
      </div>
      <HomeItinerary />
      <Transition classname="home-itinerary-info" imageSrc="./photos/home/transition.png" />
      <HomeInfo setCurrentPage={props.setCurrentPage} setCurrentSection={props.setCurrentSection}/>
      <HomePhotos />
    </div>
  )
}
export default Home;