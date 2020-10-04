import React, { useState } from 'react';
import './App.scss';
import Footer from './view/components/Footer/Footer';
import Header from './view/components/Header/Header';
import Home from './view/components/Home/Home';
import Infos from './view/components/Infos/Infos';
import Itinerary from './view/components/Itinerary/Itinerary';
import LocalContext from './view/components/LocalisationContext/LocalContext';
import Menu from './view/components/Menu/Menu';
import Photos from './view/components/Photos/Photos';

export enum Page {
  home,
  itinerary,
  infos,
  photos
}

const App : React.FunctionComponent = props => {
  const [currentPage, setCurrentPage] = useState(Page.home);
  let Content : React.FC;
  switch (currentPage) {
    case Page.home:
      Content = Home;
      break;
    case Page.itinerary:
      Content = Itinerary;
      break;
    case Page.infos:
      Content = Infos;
      break;
    case Page.photos:
      Content = Photos;
      break;
  }
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <LocalContext>
      <div className={`App`}>
        <Header isMenuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
        <div className={`content`}>
          <Content/>
        </div>
        <Footer/>
        <Menu activeLink="" isVisible={menuVisible} setMenuVisible={setMenuVisible} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </LocalContext>
  )
}
export default App;
