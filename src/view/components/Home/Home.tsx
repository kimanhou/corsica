import React from 'react';
import './Home.scss';

const Home : React.FunctionComponent = props => {
  return (
    <div className={`home`}>
      <div className={`home-image-container`}>
        <img src="./photos/home/home.png" className={`home-image`}/>
      </div>
    </div>
  )
}
export default Home;