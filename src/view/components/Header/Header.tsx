import React, { useContext } from 'react';
import Local from '../LocalisationContext/Local';
import Text from '../LocalisationContext/Text';
import { LocalValueContext, SetLocalContext } from '../LocalisationContext/LocalContext';
import './Header.scss';
import MenuIcon from './MenuIcon';

interface IHeaderProps {
  isMenuVisible : boolean; 
  setMenuVisible : (isMenuVisible : boolean) => void;
}

const Header : React.FunctionComponent<IHeaderProps> = props => {
  var currentLanguage = useContext(LocalValueContext);
  var setLocalisation = useContext(SetLocalContext);
  const setLanguageTo = (localisation : Local) => {
    setLocalisation(localisation);
  }

  return (
    <div className={`header`}>
      <div className={`languages`}>
        <div className={`english`} onClick={() => setLanguageTo(Local.EN)}>EN</div> - <div className={`french`} onClick={() => setLanguageTo(Local.FR)}>FR</div>
        <div className={`underline ${currentLanguage.getShortName()}`}></div>
      </div>
      <h1><Text english="Corsica" french="La Corse"/></h1>
      <h2>by Maki</h2>
      <MenuIcon onClick={() => props.setMenuVisible(!props.isMenuVisible)}/>
    </div>
  )
}
export default Header;