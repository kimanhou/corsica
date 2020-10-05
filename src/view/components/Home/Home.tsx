import React from 'react';
import Transition from '../Transition/Transition';
import './Home.scss';
import HomeInfo from './Info/HomeInfo';
import HomeItinerary from './Itinerary/HomeItinerary';
import HomePhotos from './Photos/HomePhotos';

const Home : React.FunctionComponent = props => {
  return (
    <div className={`home`}>
      <div className={`home-image-container`}>
        <img src="./photos/home/home.png" className={`home-image`}/>
      </div>
      <HomeItinerary />
      <Transition classname="home-itinerary-info" imageSrc="./photos/home/transition.png" />
      <HomeInfo />
      <HomePhotos />
    </div>
  )
}
export default Home;