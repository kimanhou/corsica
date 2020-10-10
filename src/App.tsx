import React, { useState } from 'react';
import './App.scss';
import DayPage from './view/components/Days/DayPage';
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
  photos,
  dayPage
}

export enum InfoSection {
  transport,
  accommodation,
  food
}

export interface IContentProps {
  setCurrentPage : (currentPage : Page) => void;
  setCurrentSection : (infoSection : InfoSection) => void;
  currentSection : InfoSection;
}

const App : React.FunctionComponent = props => {
  const [currentPage, setCurrentPage] = useState(Page.home);
  let Content : React.FC<IContentProps>;
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
    case Page.dayPage:
      Content = DayPage;
      break;
  }

  const [currentSection, setCurrentSection] = useState(InfoSection.transport);
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <LocalContext>
      <div className={`App`}>
        <Header isMenuVisible={menuVisible} setMenuVisible={setMenuVisible} setCurrentPage={setCurrentPage}/>
        <div className={`content`}>
          <Content setCurrentPage={setCurrentPage} setCurrentSection={setCurrentSection} currentSection={currentSection}/>
        </div>
        <Footer setCurrentPage={setCurrentPage}/>
        <Menu activeLink="" isVisible={menuVisible} setMenuVisible={setMenuVisible} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </LocalContext>
  )
}
export default App;
