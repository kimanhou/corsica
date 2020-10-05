import React from 'react';
import Transition from '../Transition/Transition';
import './Home.scss';
import Info from './Info/Info';
import HomeItinerary from './Itinerary/HomeItinerary';

const Home : React.FunctionComponent = props => {
  return (
    <div className={`home`}>
      <div className={`home-image-container`}>
        <img src="./photos/home/home.png" className={`home-image`}/>
      </div>
      <HomeItinerary />
      <Transition classname="home-itinerary-info" imageSrc="./photos/home/transition.png" />
      <Info />
    </div>
  )
}
export default Home;