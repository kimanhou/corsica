import React from 'react';
import './App.scss';
import Footer from './view/components/Footer/Footer';
import Header from './view/components/Header';
import Home from './view/components/Home/Home';

const App : React.FunctionComponent = props => {
  let Content : React.FC = Home;
  return (
    <div className={`App`}>
      <Header/>
      <div className={`content`}>
        <Content/>
      </div>
      <Footer/>
    </div>
  )
}
export default App;
