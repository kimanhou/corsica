import React from 'react';
import './Header.scss';
import MenuIcon from './MenuIcon';

interface IHeaderProps {
  isMenuVisible : boolean; 
  setMenuVisible : (isMenuVisible : boolean) => void;
}

const Header : React.FunctionComponent<IHeaderProps> = props => {
  return (
    <div className={`header`}>
      <h1>La Corse</h1>
      <h2>by Maki</h2>
      <MenuIcon onClick={() => props.setMenuVisible(!props.isMenuVisible)}/>
    </div>
  )
}
export default Header;