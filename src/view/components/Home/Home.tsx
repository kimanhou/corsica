import React from 'react';
import './Home.scss';
import HomeItinerary from './HomeItinerary';

const Home : React.FunctionComponent = props => {
  return (
    <div className={`home`}>
      <div className={`home-image-container`}>
        <img src="./photos/home/home.png" className={`home-image`}/>
      </div>
      <HomeItinerary />
    </div>
  )
}
export default Home;